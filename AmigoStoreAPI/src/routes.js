const express = require('express');
const routes = express.Router();
const userRoutes = require("./routes/user");
const addressRoutes = require("./routes/address");
const authRoutes = require("./routes/auth");
const cardRoutes = require("./routes/card");
const productRoutes = require("./routes/product");
const productCategoryRoutes = require("./routes/productCategory");
const ratingRoutes = require("./routes/rating");
const middlewares = require('./utils/middlewares');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

routes.use(authRoutes);
routes.use('/api-docs', swaggerUi.serve);
routes.get('/api-docs', swaggerUi.setup(swaggerDocument));
routes.use('*', middlewares.AuthCheck);
routes.use(userRoutes);
routes.use(addressRoutes);
routes.use(cardRoutes);
routes.use(productRoutes);
routes.use(productCategoryRoutes);
routes.use(ratingRoutes);

module.exports = routes;