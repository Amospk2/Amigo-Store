const express = require('express');
const routes = express.Router();
const UserController = require('./controllers/UserController');
const authController = require('./controllers/AuthController');
const addressController = require('./controllers/AddressController');
const cardController = require('./controllers/CardController');
const ProductCategoryController = require('./controllers/ProductCategoryController');
const ProductController = require('./controllers/ProductController');
const RatingController = require('./controllers/RatingController');
const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' });


// User Routes
routes.get("/users/", UserController.list);
routes.get("/users/:id", UserController.show);
routes.post("/users", parser.single('image'), UserController.create);
routes.put("/users/:id", UserController.update);
routes.delete("/users/:id", UserController.delete);


// Adress Routes
routes.get("/adress/", addressController.list);
routes.get("/adress/:id", addressController.show);
routes.post("/adress", addressController.create);
routes.put("/adress/:id", addressController.update);
routes.delete("/adress/:id", addressController.delete);


// Card Routes
routes.get("/card/", cardController.list);
routes.get("/card/:id", cardController.show);
routes.post("/card", cardController.create);
routes.put("/card/:id", cardController.update);
routes.delete("/card/:id", cardController.delete);


// Product Category Routes
routes.get("/product-category/", ProductCategoryController.list);
routes.get("/product-category/:id", ProductCategoryController.show);
routes.post("/product-category", ProductCategoryController.create);
routes.put("/product-category/:id", ProductCategoryController.update);
routes.delete("/product-category/:id", ProductCategoryController.delete);


// Product Routes
routes.get("/product/", ProductController.list);
routes.get("/product/:id", ProductController.show);
routes.post("/product", parser.single('image'), ProductController.create);
routes.put("/product/:id", ProductController.update);
routes.delete("/product/:id", ProductController.delete);


// Rating Routes
routes.get("/rating/user-ratings/:id", RatingController.list);
routes.get("/rating/product-ratings/:id", RatingController.show);
routes.post("/rating", RatingController.create);
routes.put("/rating/:id", RatingController.update);
routes.delete("/rating/:id", RatingController.delete);

// Auth Routes
routes.post("/auth", authController.auth);
routes.get("/valide-token", authController.tokenValidate);
routes.get('/logout', authController.logout);

routes.get('/', async (req, res) => {
    res.status(200).send('Welcome to nodejs server!');
});


module.exports = routes;