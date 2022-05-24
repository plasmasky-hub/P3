import { Request, Response, NextFunction } from "express";


export class UserControllers {

    async getAllUsers(req : Request, res : Response){
        // db.courses.find()
        console.log('Finding user...');
        // const courses = await Course.find();
    
        // res.json(courses);
    }

    async addUser(req : Request, res : Response){
        // const { code, name, description } = req.body;
        // 正常情况应此处有数据验证
        // const course = new Course({ code, name, description });
        // await course.save();
        res.status(201).send('New user added!');
    }
}