const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');
const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' });
const middlewares = require('../utils/middlewares');

// User Routes
routes.get("/users/:id", UserController.show);
routes.get("/users/", UserController.list);
routes.post("/users", parser.single('image'), UserController.create);
routes.put("/users/:id", UserController.update);
routes.use('*', middlewares.typeCheck);

routes.delete("/users/:id", UserController.delete);



module.exports = routes;