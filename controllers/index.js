const router = require('express').Router();

const apiRoutes = require('./api');
const teacherRoutes = require('./teacher-routes.js');

router.use('/api', apiRoutes);
router.use('/', teacherRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;