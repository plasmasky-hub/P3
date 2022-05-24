// import mongoose from "mongoose";

// const schema = new mongoose.Schema({
//     name : {
//         type : String,
//         required : true,
//     },
//     role : {
//         type : String,
//         required : true,
//     },
//     tel : {
//         type : String,
//         default : '',
//     },
// });

// const Modle = mongoose.model('user', schema);

// module.exports = Modle;

import { Schema, model , connect} from 'mongoose';

interface IUser {
    name : String,
    role : String,
    tel : String,
}

const userSchema = new Schema<IUser>({
    name : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
    },
    tel : {
        type : String,
        default : '',
    },
})

const user = model<IUser>('User', userSchema);

