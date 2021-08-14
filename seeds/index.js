const seedUsers = require('./user-seeds');
const seedNewsfeed = require('./newsfeed-seeds');
const seedNewsupdate = require('./newsupdate-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('----------');
    
    await seedUsers.sync();
    console.log('---------');
    
    await seedNewsfeed.sync();
    console.log('---------');

    await seedNewsupdate();
    console.log('---------');

    process.exit(0);
};

seedAll();