const { Newsupdate } = require('../models');

const updateData = [
    {
        newsupdate_text: 'I feel like this article helped my understanding of SOCATOAH increase',
        newsfeed_id: 1,
        user_id: 2
    },
    {
        newsupdate_text: 'This article has clear examples which easy to follow and understand',
        newsfeed_id: 2,
        user_id: 1
    },
    {
        newsupdate_text: 'Is it okay if I read a book that is not on this list',
        newsfeed_id: 3,
        user_id: 4
    },
    {
        newsupdate_text: 'When will we be tested on this article about the vietnam war',
        newsfeed_id: 4,
        user_id: 5
    },
    {
        newsupdate_text: 'I was able to learn the why behind the war of 1812 and a lot more about the battles that were fought',
        newsfeed_id: 5,
        user_id: 3
    },
    {
        newsupdate_text: 'I understand how covalent bonds form now and whats makes them covalent',
        newsfeed_id: 6,
        user_id: 7
    },
    {
        newsupdate_text: 'this article gave a great overview on the events that lead America to purchasing Louisiana',
        newsfeed_id: 7,
        user_id: 8
    },
    {
        newsupdate_text: 'I feel more confident in my ability to solve complex numbers after',
        newsfeed_id: 8,
        user_id: 10
    },
    {
        newsupdate_text: 'This article is more of an overivew about the different parts of a camera dn how to choose the best parts for your camera. This article needs to be changed',
        newsfeed_id: 9,
        user_id: 9
    },
    {
        newsupdate_text: 'I think this article does an excellent job at helping someone understand the basics of mitosis',
        newsfeed_id: 10,
        user_id: 6
    }
];

const seedNewsupdate = () => Newsupdate.bulkCreate(updateData)

module.exports = seedNewsupdate;