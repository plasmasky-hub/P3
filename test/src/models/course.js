const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    _id:{
        type : String,
        uppercase : true,
        alias : 'code' // aka, virtual property
    },
    name : {
        type : String,
        required : true // mongoose 校验
    },
    description : {
        type : String,
        default : 'No description.'
    },
    // code : {

    // }
})

const Model = mongoose.model('Crouse', schema);

module.exports = Model;