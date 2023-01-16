const routes = require('express').Router();
const middlewares = require('../utils/middlewares');
const addressController = require('../controllers/AddressController');
// Adress Routes
routes.get("/address/:id", addressController.findUserAdress);
routes.get("/address/show/:id", addressController.show);
routes.post("/address", addressController.create);
routes.put("/address/:id", addressController.update);
routes.use('*', middlewares.typeCheck);
routes.delete("/address/:id", addressController.delete);


module.exports = routes;