const mongoose = require("mongoose");
const validator = require('validator')

const studentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength:3
    },
    email:{
        type: String,
        required: true,
        unique: [true, "Email id is already Present"],
        validate(val){
            if(!validator.isEmail(val)){
                throw new Error("This email is not valid");
            }
        }
    },
    phoneNumber:{
        type: Number,
        minLength: 10,
        maxLength: 10,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true
    }
})

const studentModel = mongoose.model('StudentDetail',studentSchema);

module.exports = studentModel;