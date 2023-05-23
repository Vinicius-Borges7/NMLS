// Dependencies //
const jwt = require('jsonwebtoken');

// Modules //
const express = require('express');
const router = express.Router();

// Schema //
const User = require('../schemas/user')

// Classes //
const Database = require('../config/database')
const db = new Database('USERS');

db.connect().then(() => {
    router.post('/register', async (req, res) => {
        const { name, email, password } = req.body;

        if(name && email && password){
            const newUser = new User({
                "name": name,
                "email": email,
                "password": password
            });

            const findByEmailRes = await User.findByEmail(email);

            if(!findByEmailRes){
                newUser.save()   
                .then(() => {
                    res.status(200).json({
                        "response" : true,
                        "message" : "user created sucessfully"
                    })
                })

                .catch((err) => {
                    res.status(500).json({
                        "response" : false,
                        "message": "something goes wrong whith the server",
                        "error" : err
                    })
                })
            } else {
                res.status(401).json({
                    "response" : false,
                    "message": "this email is already registred",
                })
            }
        } else {
            res.status(401).json({
                "response" : false,
                "message" : "some required field of the sent JSON is empty"
            })
        }
    })

    router.post('/login', async (req, res) => {
        const { email, password } = req.body;

        if(email && password){
            const user = await User.findByEmail(email);

            if(user){
                if(user.password == password){
                    res.status(200).json({
                        "response" : true,
                        "message" : "Logged sucessfully",
                        "token" : jwt.sign({ "id": user.id }, global.JWT_SECRET_KEY)
                    })
                } else {
                    res.status(401).json({
                        "response" : false,
                        "message" : "wrong password"
                    })
                }
            } else {
                res.status(404).json({
                    "response" : false,
                    "message" : "this email isnt registred yet"
                })
            }
        } else {
            res.status(401).json({
                "response" : false,
                "message" : "some required field of the sent JSON is empty"
            })
        }
    })
})

module.exports = router;