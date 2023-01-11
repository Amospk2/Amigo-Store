const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');

class Product extends Model { }

Product.init({
    idProduct: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tags: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
    },

},
{
    sequelize: sequelizeConnection,
    modelName: "Product",
    schema: "AmigoStore"
});



module.exports = Product;