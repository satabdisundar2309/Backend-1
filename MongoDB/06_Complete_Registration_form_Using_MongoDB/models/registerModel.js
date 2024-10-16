require('dotenv').config();
const secretKey = process.env.SECRET_KEY;

const mongoose = require('mongoose')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const registerSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    gender:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true
    },
    age:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }] //this is the syntax of including tokens in the db schema

})

//! Authorisation middleware using jwt to generate tokens
registerSchema.methods.generateAuthToken = async function(){
    try {
        console.log(this._id)
        const token = jwt.sign({_id: this._id.toString()}, secretKey);
        this.tokens = this.tokens.concat({token:token}) //for adding tokens in the db document while registering user
        await this.save();
        return token; 
    } catch (error) {
        console.log("the error part"+ error)
    }
}

// ! Using bcryptjs middleware to hash the password field
registerSchema.pre("save", async function (next) { //here callback function will show error hence we will use normal method
    if(this.isModified("password")){ 
        console.log(`The current password is ${this.password}`)
        this.password = await bcrypt.hash(this.password, 10)
        console.log(`The hashed password is ${this.password}`)

        this.confirmPassword = await bcrypt.hash(this.confirmPassword, 10);
    }
    next(); //not calling this will lead to unending loading of the page
})

const registerModel = mongoose.model('User',registerSchema);
module.exports = registerModel;