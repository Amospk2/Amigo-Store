const routes = require('express').Router();
const RatingController = require('../controllers/RatingController');
const middlewares = require('../utils/middlewares');
// Rating Routes
routes.get("/rating/user-ratings/:id", RatingController.userRatings);
routes.get("/rating/product-ratings/:id", RatingController.productRatings);
routes.post("/rating", RatingController.create);
routes.put("/rating/:id", RatingController.update);

routes.use('*', middlewares.typeCheck);
routes.delete("/rating/:id", RatingController.delete);



module.exports = routes;