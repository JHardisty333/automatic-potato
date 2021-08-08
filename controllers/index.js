const router = require('express').Router();
<<<<<<< HEAD

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

=======
const teacherRoutes = require('./teacher-routes.js');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', teacherRoutes);

router.use((req, res) => {
    res.status(404).end();
});

>>>>>>> coder
module.exports = router;