const routes = require('express').Router();
const cardController = require('../controllers/CardController');
const middlewares = require('../utils/middlewares');

// Card Routes
routes.get("/card/:id", cardController.findUserCards);
routes.get("/card/show/:id", cardController.show);
routes.post("/card", cardController.create);
routes.put("/card/:id", cardController.update);

routes.get("/users/", UserController.list);
routes.delete("/card/:id", cardController.delete);


module.exports = routes;