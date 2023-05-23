// Modules and Dependencies//
const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');

// Classes //
const Database = require('../config/database')
const db = new Database('USERS');

app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'profile', 'email' ]})
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        
    });