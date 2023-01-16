const routes = require('express').Router();
const ProductController = require('../controllers/ProductController');
const middlewares = require('../utils/middlewares');

const multer = require('multer');
const parser = multer({ dest: 'public/uploads/' });


// Product Routes
routes.get("/product/", ProductController.list);
routes.get("/product/:id", ProductController.show);
routes.post("/product", parser.single('image'), ProductController.create);
routes.put("/product/:id", ProductController.update);
routes.use('*', middlewares.typeCheck);
routes.delete("/product/:id", ProductController.delete);


module.exports = routes;