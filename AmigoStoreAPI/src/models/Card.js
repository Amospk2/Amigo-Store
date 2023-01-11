const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');

class Card extends Model { }

Card.init({
    idCard: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    number: { type: DataTypes.STRING, allowNull: false },
    cvv: { type: DataTypes.STRING(3), allowNull: false },
    expDate: { type: DataTypes.DATE, allowNull: false },
},
{
    sequelize: sequelizeConnection,
    modelName: "card",
    schema: "AmigoStore"
});

module.exports = Card;
