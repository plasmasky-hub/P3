import exp = require('constants');
import express, {Router, Request, Response, NextFunction} from 'express';
import { UserControllers } from './user';

// const router = express.Router();

const userControllers = new UserControllers;

export class mainRouter {
    router : Router;

    constructor(){
        this.router = express.Router();
        this.userControllers();
    }

    userControllers(){
        this.router.get('/users', userControllers.getAllUsers);
        this.router.post('', userControllers.addUser);
    }
}



