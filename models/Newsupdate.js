const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Newsupdate extends Model {}

Newsupdate.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        newsupdate_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'user',
                key: 'id'
            }
        },
        newsfeed_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'newsfeed',
                key: 'id'
            }
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