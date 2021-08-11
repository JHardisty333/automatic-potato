const router = require('express').Router();

const apiRoutes = require('./api');
const teacherRoutes = require('./teacher-routes.js');

router.use('/api', apiRoutes);
router.use('/', teacherRoutes);

module.exports = router;