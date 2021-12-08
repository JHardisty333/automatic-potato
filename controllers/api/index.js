const router = require('express').Router();

const newsupdateRoutes = require('./newsupdate-routes.js');
const newsfeedRoutes = require('./newsfeed-routes.js');
const userRoutes = require('./user-routes.js');

router.use('/newsupdate', newsupdateRoutes);
router.use('/newsfeed', newsfeedRoutes);
router.use('/users', userRoutes);

module.exports = router;

