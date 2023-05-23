// Dependencies and Modules //
const express = require('express');
const cors = require('cors')
const cron = require('node-cron');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const app = express()

// Classes and their Instances //
const Server = require('./config/server');
const Encryptum = require('./config/encryptum');
const server = new Server(app);
const encryptum = new Encryptum();

// Enviroment Variable Call //
const { CLIENT_ID, CLIENT_SECRET } = process.env;

// Middlewares //
app.use(express.json());
app.use(cors({
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true
}));

app.use(new GoogleStrategy({
	clientID: CLIENT_ID,
	clientSecret: CLIENT_SECRET,
	callbackURL: "callback"
}, (accessToken, refreshToken, profile, done) => {
	console.log("accessToken: " + accessToken);
	console.log("refreshToken: " + accessToken);
	console.log("profile: " + accessToken);
	console.log("done: " + accessToken);

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

server.start();