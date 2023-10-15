const mongoose = require('mongoose');

const {Schema} = mongoose;
const EmpSchema = new Schema({

    emp_id:{
       type:Number,
       required:true
    },
    name:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    department:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    // password:{
    //     type:String,
    //     required:true
    // },
    mobile:{
        type:Number,
        required:true
    },
    img:{
        type:String,
        required:true
    }

});

module.exports = mongoose.model('employee',EmpSchema);