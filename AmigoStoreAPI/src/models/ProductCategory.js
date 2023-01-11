const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');

class ProductCategory extends Model { }

ProductCategory.init({
    idProductCategory: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    sequelize:sequelizeConnection,
    modelName:"ProductCategory",
    schema:"AmigoStore"
});

module.exports = ProductCategory;
