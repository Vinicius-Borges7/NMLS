// Dependencies and Modules //
const express = require('express');
const cors = require('cors')
const cron = require('node-cron');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const app = express()
const Server = require('./config/server');
const Encryptum = require('./config/encryptum');
const server = new Server(app);
const encryptum = new Encryptum();
const { CLIENT_ID, CLIENT_SECRET } = process.env;

// Middlewares //
app.use(express.json());
app.use(cors({
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true
}));

// Routes //
const user = require('./routes/user');

app.use('/user', user);

// Main //
encryptum.newJwt();
encryptum.setTokens();

cron.schedule('0 0 * * *', () => {
	encryptum.restartTokens();
});
''
server.start();