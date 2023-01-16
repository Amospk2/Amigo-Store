const dotenv = require('dotenv');
dotenv.config();
require('./utils/dbModels');
const express = require('express');
const routes = require('./routes');
const session = require("express-session");
const cookieParser = require('cookie-parser');

const api = express();
api.use(express.json());
api.use(express.static('public'));
api.use(cookieParser());

api.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.PRIVATE_KEY,
    cookie: { maxAge: 1000 * 60 * 60 }
}))
api.use(routes);

api.listen(process.env.API_PORT, process.env.API_HOST);