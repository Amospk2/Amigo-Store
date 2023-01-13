
const routes = require('express').Router();
const authController = require('../controllers/AuthController');

// Auth Routes
routes.post("/auth", authController.auth);
routes.get('/logout', authController.logout);


module.exports = routes;