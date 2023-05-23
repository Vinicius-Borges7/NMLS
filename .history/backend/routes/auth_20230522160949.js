// Modules and Dependencies//
const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

// Classes //
const Database = require('../config/database')
const db = new Database('USERS');

app.get('/auth/google',
    passport.authenticate('google', { scope: [ 'profile', 'email' ]})
);

app.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        console.log('é os guri')
    }
);

app.get('/auth/google/register/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
        ""
    }
);