const router = require('express').Router();

const newsfeedRoutes = require('./newsfeed-routes.js');
const userRoutes = require('./user-routes.js');
const newsupdateRoutes = require('./newsupdate-routes');


router.use('/newsfeed', newsfeedRoutes);
router.use('/users', userRoutes);
router.use('/newsupdate', newsupdateRoutes);

module.exports = router;

