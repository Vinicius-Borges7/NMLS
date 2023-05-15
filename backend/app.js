// Dependencies and Modules //
const express = require('express');
const cron = require('node-cron');
const app = express()

const newSecret = require('./helpers/newSecret');

// Middlewares //
app.use(express.json());

// Classes and their Instances //
const Server = require('./config/server');
const server = new Server(app);

// Routes //
const user = require('./routes/user');
app.use('/user', user);

// JWT token secret generator //
newSecret();
cron.schedule('0 0 * * *', () => {
    newSecret();
});

// Server //
server.start();