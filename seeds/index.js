const seedUsers = require('./user-seeds');
const seedNewsfeed = require('./newsfeed-seeds');

const sequelize = require('../config/connection');

const seedStore = async () => {
    await sequelize.sync({ force: true });
    console.log('----------');
    await seedUsers();
    console.log('---------');
    await seedNewsfeed();
    console.log('---------');

    process.exit(0);
};

seedStore();