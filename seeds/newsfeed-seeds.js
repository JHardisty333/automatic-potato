const { Newsfeed } = require('../models');

const newsfeedinfo = [
    {
        name: 'Mr. Davidson',
        message: 'Uses this website as a review for using SOCATOAH',
        newsfeed_url: 'https://www.mathsisfun.com/algebra/sohcahtoa.html/press',
        user_id: 1
    },
    {
        name: 'Mr. Brinkerhoff',
        message: 'Here are examples of different methods to factor quadratic equations',
        newsfeed_url: 'https://www.varsitytutors.com/hotmath/hotmath_help/topics/graphing-quadratic-equations-using-factoring/press',
        user_id: 2
    },
    {
        name: 'Mrs. Fully',
        message: 'Here is a list of books you can read for your book report',
        newsfeed_url: 'https://www.edutopia.org/article/20-indispensable-high-school-reads-stephen-merrill/press',
        user_id: 3
    },
    {
        name: 'Mrs. Winchester',
        message: 'Brush up on your knowledge about the Vietnam War by following this link',
        newsfeed_url: 'https://www.history.com/topics/vietnam-war/vietnam-war-history/press',
        user_id: 4
    },
    {
        name: 'Mr. Callaway',
        message: 'Follow this link to brush up on your knowledge about the war of 1812 for our quiz tomorrow',
        message: 'https://www.battlefields.org/learn/war-1812/battles/new-orleans?gclid=CjwKCAjwx8iIBhBwEiwA2quaqwHOlYybwknIYUA4VeU5p5-2W-5VCr579K2VoQB3rymtuxieaX7GaRoChkAQAvD_BwE/press',
        user_id: 5
    }
]; 

const seedNewsfeed = () => Newsfeed.bulkCreate(newsfeedinfo);

module.exports = seedNewsfeed;