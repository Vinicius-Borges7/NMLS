// Modules and Dependencies//
const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

// Classes //
const Database = require('../config/database')
const db = new Database('USERS');

router.get('/google',
    passport.authenticate('google', { scope: [ 'profile', 'email' ]})
);

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        console.log('é os guri');
    }
);

router.get('/auth/google/register/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        console.log("cavalo");
    }
);

module.exports = router;