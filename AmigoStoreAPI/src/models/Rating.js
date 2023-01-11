const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');

class Rating extends Model { }


Rating.init({
    idRating: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    description: { type: DataTypes.TEXT, allowNull: false },
    rate: { type: DataTypes.INTEGER, allowNull: false },
},
{
    sequelize: sequelizeConnection,
    modelName: "Rating",
    schema: "AmigoStore"
});


module.exports = Rating;

