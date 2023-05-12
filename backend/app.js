// Dependencies //
const express = require('express');
const app = express();

// Classes and their Instances //
const Server = require('./config/server');
const server = new Server(app);

// Main Code //
server.start();