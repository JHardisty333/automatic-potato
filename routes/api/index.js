const router = require('express').Router();

const newsfeedRoutes = require('./newsfeed-routes.js');
const userRoutes = require('./user-routes.js');


router.use('/newsfeed', newsfeedRoutes);
router.use('/users', userRoutes);

module.exports = router;