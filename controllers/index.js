const router = require('express').Router();

// const studentRoutes = require('./student-routes.js');
const teacherRoutes = require('./teacher-routes.js');


// router.use('/student', studentRoutes);
router.use('/', teacherRoutes);


