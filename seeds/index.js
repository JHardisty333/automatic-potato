const seedUsers = require('./user-seeds');
const seedNewsfeed = require('./newsfeed-seeds');
const seedNewsupdate = require('./newsupdate-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('----------');
    
    await seedUsers();
    console.log('Users seeded');
    
    await seedNewsfeed();
    console.log('Newsfeed seeded');

    await seedNewsupdate();
    console.log('Newsupdate seeded');

    process.exit(0);
};

seedAll();
