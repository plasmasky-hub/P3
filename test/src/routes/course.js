const express = require('express');
const { getAllCourses, addCourse, updateCourseByID, getCourseByID, deleteCourseByID } = require('../controllers/course');

const courseRouter = express.Router();

courseRouter.get('', getAllCourses);
courseRouter.post('', addCourse);
courseRouter.get('/:id', getCourseByID);
courseRouter.put('/:id', updateCourseByID);
courseRouter.delete('/:id', deleteCourseByID);

module.exports = courseRouter;