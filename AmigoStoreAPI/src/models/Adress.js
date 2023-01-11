const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');

class Adress extends Model { }

Adress.init({
    idAdress: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    street: { type: DataTypes.STRING, allowNull: false },
    neighborhood: { type: DataTypes.STRING, allowNull: false },
    zipCode: { type: DataTypes.STRING(8), allowNull: false },
    complement: { type: DataTypes.STRING }
},
{
    sequelize: sequelizeConnection,
    modelName: "adress",
    schema: "AmigoStore"
});


module.exports = Adress;