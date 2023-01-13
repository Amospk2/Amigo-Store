const { DataTypes, Model } = require('sequelize');
const sequelizeConnection = require('../utils/db');
const useBcrypt = require('sequelize-bcrypt');

class User extends Model { }

User.init({
    idUser: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }

},
{
    sequelize: sequelizeConnection,
    modelName: "user",
    schema: "AmigoStore"
});

useBcrypt(User, {
    field: 'password', 
    rounds: 12,
});

module.exports = User;