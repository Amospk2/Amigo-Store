const routes = require('express').Router();
const ProductCategoryController = require('../controllers/ProductCategoryController');

// Product Category Routes
routes.get("/product-category/", ProductCategoryController.list);
routes.get("/product-category/:id", ProductCategoryController.show);
routes.post("/product-category", ProductCategoryController.create);
routes.put("/product-category/:id", ProductCategoryController.update);
routes.delete("/product-category/:id", ProductCategoryController.delete);

module.exports = routes;