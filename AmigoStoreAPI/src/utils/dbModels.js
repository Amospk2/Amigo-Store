const Adress = require('../models/Adress');
const Card = require('../models/Card');
const Product = require('../models/Product');
const ProductCategory = require('../models/ProductCategory');
const User = require('../models/User');
const Rating = require('../models/Rating');
const sequelizeConnection = require('./db');


Adress.User = Adress.belongsTo(User);
User.Cards = User.hasMany(Card);
Product.productCategory = Product.belongsTo(ProductCategory);

Rating.belongsToMany(User, { through: "user_rating" });
User.belongsToMany(Rating, { through: "user_rating" });

Rating.belongsToMany(Product, { through: "product_rating" });
Product.belongsToMany(Rating, { through: "product_rating" });


sequelizeConnection.sync();

