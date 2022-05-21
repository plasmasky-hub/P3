const Course = require('../models/course');

async function getAllCourses(req, res){
    // db.courses.find()
    console.log('Finding courses...');
    const courses = await Course.find().then(function (err, courses) {
        if (err) return console.error(err);
        console.log(courses);
    });

    res.json(courses);
}

function getCourseByID(req, res){}

async function addCourse(req, res){
    const { code, name, description } = req.body;
    // 正常情况应此处有数据验证
    const course = new Course({ code, name, description });
    await course.save();
    res.status(201).json(course);
}

function updateCourseByID(req, res){}
function deleteCourseByID(req, res){}

module.exports = {
    getAllCourses,
    getCourseByID,
    addCourse,
    updateCourseByID,
    deleteCourseByID
}
