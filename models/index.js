const User = require("./User");
const Newsfeed = require("./Newsfeed");
const { post } = require("../routes");

User.hasMany(Newsfeed, {
    foreignKey: 'user_id'
});

Newsfeed.belongsTo(User, {
    foreignKey: 'user_id',
});

module.exports = { User, Newsfeed };