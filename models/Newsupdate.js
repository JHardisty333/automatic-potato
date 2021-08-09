const { Model, Datatypes, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Newsupdate extends Model {}

Newsupdate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'newsupdate'
    }
);

module.exports = Newsupdate;