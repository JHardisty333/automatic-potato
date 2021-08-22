const User = require("./user");
const Newsfeed = require("./Newsfeed");
const Newsupdate = require("./Newsupdate");

User.hasMany(Newsfeed, {
    foreignKey: 'user_id'
});

Newsfeed.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Newsupdate.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Newsupdate.belongsTo(Newsfeed, {
    foreignKey: 'newsfeed_id',
    onDelete: 'SET NULL'
});

User.hasMany(Newsupdate, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Newsfeed.hasMany(Newsupdate, {
    foreignKey: 'newsfeed_id'
});


module.exports = { User, Newsfeed, Newsupdate };