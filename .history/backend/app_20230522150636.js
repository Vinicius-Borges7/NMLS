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
	callbackURL: "localhost:8080/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
    // Aqui você pode implementar a lógica de verificação do usuário e retornar o resultado para o 'done'
    // Se a verificação for bem-sucedida, você pode chamar o 'done' com null como primeiro argumento e o objeto 'profile' como segundo argumento
    // Se a verificação falhar, você pode chamar o 'done' com um erro como primeiro argumento

    // Exemplo de verificação bem-sucedida
    if (userExists(profile.email)) {
        return done(null, profile);
    }

    // Exemplo de verificação falha
    return done(new Error("Usuário não encontrado"));
}));

// Routes //
const user = require('./routes/user');
const auth = require('./routes/auth');

app.use('/user', user);
app.use('/auth', auth);

// Main //
encryptum.newJwt();
encryptum.setTokens();

cron.schedule('0 0 * * *', () => {
	encryptum.restartTokens();
});

server.start();