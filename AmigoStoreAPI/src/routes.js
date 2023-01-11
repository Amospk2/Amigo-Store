const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const authController = require('./controllers/AuthController');
const adressController = require('./controllers/AdressController');

// User Routes
routes.get("/users/", UserController.list);
routes.get("/users/:id", UserController.show);
routes.post("/users", UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


// Adress Routes
routes.get("/adress/", adressController.list);
routes.get("/adress/:id", adressController.show);
routes.post("/adress", adressController.create);
routes.put("/adress/:id", adressController.update);
routes.delete("/adress/:id", adressController.delete);



// Auth Routes
routes.post("/auth", authController.auth);
routes.get("/valide-token", authController.tokenValidate);
routes.get('/logout', authController.logout);
routes.get('/', async (req, res) => {
    res.send("Your is in NodeJs Server!");
});




module.exports = routes;