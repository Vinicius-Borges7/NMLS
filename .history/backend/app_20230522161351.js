// Dependencies and Modules //
const express = require('express');
const cors = require('cors')
const cron = require('node-cron');
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
const googleStrategy = new GoogleStrategy({
		clientID: CLIENT_ID,
		clientSecret: CLIENT_SECRET,
		callbackURL: "localhost:8080/auth/google/callback"
	},
	(accessToken, refreshToken, profile, done) => {
    	if (userExists(profile.email)) {
        	return done(null, profile);
    	}
    	return done(new Error("Usuário não encontrado"));
	}
);

app.use(express.json());
app.use(cors({
	origin: '*',
	methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
	credentials: true
}));
passport.use(googleStrategy);

// Routes //
const user = require('./routes/user');
const auth = require('./routes/auth');
const passport = require('passport');

app.use('/user', user);
app.use('/auth', auth);

// Main //
encryptum.newJwt();
encryptum.setTokens();

cron.schedule('0 0 * * *', () => {
	encryptum.restartTokens();
});

server.start();