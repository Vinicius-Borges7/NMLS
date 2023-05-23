// Modules and Dependencies//
const express = require('express');
const router = express.Router();

const passport = require('passport');
const jwt = require('jsonwebtoken');

// Classes //
const Database = require('../config/database')
const db = new Database('USERS');

// router.get('/auth/google',
//     passport.authenticate('google', { scope: [ 'profile', 'email' ]})
// );

// router.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         console.log('é os guri');
//     }
// );

// router.get('/auth/google/register/callback',
//     passport.authenticate('google', { failureRedirect: '/' }),
//     (req, res) => {
//         console.log("cavalo");
//     }
// );

router.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log('é os guri');
    res.redirect('/dashboard'); // Redirecione para a página desejada após a autenticação bem-sucedida
  }
);

router.get('/auth/google/register/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    console.log("cavalo");
    res.redirect('/dashboard'); // Redirecione para a página desejada após a autenticação bem-sucedida
  }
);