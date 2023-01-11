const dotenv = require('dotenv');
dotenv.config();
require('./utils/dbModels');
const express = require('express');
const routes = require('./routes');


const api = express();
api.use(express.json());
api.use(routes)


api.listen(process.env.API_PORT, process.env.API_HOST);