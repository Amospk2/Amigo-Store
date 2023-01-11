const Adress = require('../models/Adress');
const Card = require('../models/Card');
const Product = require('../models/Product');
const ProductCategory = require('../models/ProductCategory');
const User = require('../models/User');
const Rating = require('../models/Rating');
const sequelizeConnection = require('./db');


Adress.User = Adress.belongsTo(User);
User.hasMany(Card);
Product.productCategory = Product.belongsTo(ProductCategory);

User.belongsToMany(Product, { through: Rating });
Product.belongsToMany(User, { through: Rating });


sequelizeConnection.sync();

