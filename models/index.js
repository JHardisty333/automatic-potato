const User = require("./User");
const Newsfeed = require("./Newsfeed");
const Newsupdate = require("./Newsupdate");

User.hasMany(Newsfeed, {
    foreignKey: 'user_id'
});

Newsfeed.belongsTo(User, {
    foreignKey: 'user_id'
});

Newsupdate.belongsTo(User, {
    foreignKey: 'user_id'
});

Newsupdate.belongsTo(Newsfeed, {
    foreignKey: 'newsfeed_id'
});

User.hasMany(Newsupdate, {
    foreignKey: 'user_id'
});

Newsfeed.hasMany(Newsupdate, {
    foreignKey: 'newsfeed_id'
});


module.exports = { User, Newsfeed, Newsupdate };