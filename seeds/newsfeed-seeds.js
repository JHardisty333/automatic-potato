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
        newsfeed_url: 'https://www.battlefields.org/learn/war-1812/battles/new-orleans?gclid=CjwKCAjwx8iIBhBwEiwA2quaqwHOlYybwknIYUA4VeU5p5-2W-5VCr579K2VoQB3rymtuxieaX7GaRoChkAQAvD_BwE/press',
        user_id: 5
    },
    {
        name: 'Mrs. Fullner',
        message: 'Follow this link to learn more about covalent bonds',
        newsfeed_url: 'https://utah.pbslearningmedia.org/resource/lsps07.sci.phys.matter.covalentbond/covalent-bonding/press',
        user_id: 6
    },
    {
        name: 'Mr. Warren',
        message: 'Use to article to write a summary on the Lousiana purchase and how it affected America',
        newsfeed_url: 'https://www.monticello.org/thomas-jefferson/louisiana-lewis-clark/the-louisiana-purchase/press',
        user_id: 7
    },
    {
        name: 'Mrs. Humberg',
        message: 'This website can be used to pracitce doing operations with complex numbers',
        newsfeed_url: 'https://courses.lumenlearning.com/prealgebra/chapter/using-the-order-of-operations-to-simplify-complex-fractions/press',
        user_id: 8
    },
    {
        name: 'Mr. Christensen',
        message: 'This article talks about the different ligthing/shading techniques used in photography',
        newsfeed_url: 'https://photodoto.com/photography-lighting-techniques/press',
        user_id: 9
    },
    {
        name: 'Mrs. Hollbrook',
        message: 'Look at this article to learn more about the process of mitosis',
        newsfeed_url: 'https://www.nature.com/scitable/definition/mitosis-cell-division-47/press',
        user_id: 10
    }
]; 

const seedNewsfeed = () => Newsfeed.bulkCreate(newsfeedinfo);

module.exports = seedNewsfeed;