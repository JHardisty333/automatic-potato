const router = require('express').Router();

// const studentRoutes = require('./student-routes.js');
const teacherRoutes = require('./teacher-routes');


// router.use('/student', studentRoutes);
router.use('/teacher', teacherRoutes);

module.exports = router;
