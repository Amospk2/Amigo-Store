const routes = require('express').Router();

const RatingController = require('../controllers/RatingController');

// Rating Routes
routes.get("/rating/user-ratings/:id", RatingController.userRatings);
routes.get("/rating/product-ratings/:id", RatingController.productRatings);
routes.post("/rating", RatingController.create);
routes.put("/rating/:id", RatingController.update);
routes.delete("/rating/:id", RatingController.delete);



module.exports = routes;