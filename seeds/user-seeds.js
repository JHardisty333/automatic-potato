const sequelize = require('../config/connection')
const { User, Newsfeed } = require('../models');

const userInfo = [
    {
        username: 'nidoqueenground0',
        email: 'Leaguechamp1-8@gmail.com',
        password: 'lightningmouse34!'
    },
    {
        username: '#1trainer',
        email: 'Cyndaquilexplosion@gmail.com',
        password: 'Evoultionstones23@'
    },
    {
        username: 'historybuff#1',
        email: 'Americanfreedom1@yahoo.com',
        password: 'Swampertmuscle23#'
    },
    {
        username: 'Culturedone#2',
        email: 'Religionisgood@gmail.com',
        password: 'Holyfreedomslance12!'
    },
    {
        username: 'Imbatman',
        email: 'Coolgadgets23@yahoo.com',
        password: 'Darknightwins25%'
    },
    {
        username: 'Manofsteel',
        email: 'Ironmaniseasy@msn.com',
        password: 'Runerfordays12!'
    },
    {
        username: 'Jediforever',
        email: 'Forcecrazy23!',
        password: 'Forcepush34#@'       
    },
    {
        username: 'RogueOne',
        email: 'Foiledplans23@gmail.com',
        password: 'Diplomaticmission180'
    }
];

const seedUsers = () => User.bulkCreate(userInfo, {individualHooks: true});

module.exports = seedUsers;