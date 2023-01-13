const express = require('express');
const routes = express.Router();
const UserController = require('../controllers/UserController');
const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' });


// User Routes
routes.get("/users/", UserController.list);
routes.get("/users/:id", UserController.show);
routes.post("/users", parser.single('image'), UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);



module.exports = routes;