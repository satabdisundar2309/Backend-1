require('dotenv').config();
const port = process.env.PORT || 5000

const express = require('express')
const app = express()

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken') //jwt or jsonwebtoken library is uded to authorize an user, that means, let say we have log into a particular website. Then when after two or three dayts we try to access that website, our browser doesnot asks us to log in into that particular website again. Because the browser stores a certain token (of that particular user) using cookies. This token helps the browser to authorize the same user and donot asks the user to log in again. The generated jwt token is unique for each user. For more better understanding use thapa technical video.

const cookieParser = require('cookie-parser') //this package is used to get cookies value
app.use(cookieParser()) //using the cookie parser and its manadatory as it is used like a middleware

const auth = require('./middleware/auth') //requireing the auth middleware to use it in secret page user authentication

app.use(express.json()); //! This only works while using postman to parse body
app.use(express.urlencoded({extended: false})) //? to get data from the form

const path = require('path');
const hbs = require("hbs")

require('./db/dbConnection');

const staticFolderPath =path.join(__dirname,"/public");
app.use(express.static(staticFolderPath));

app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/partials`);

const registerModel = require('./models/registerModel');

app.get('/',(req,res)=>{
    res.render("index");
})
app.get('/register',(req,res)=>{
    res.render("register");
})

app.post('/register',async (req,res)=>{
   try {
    const password = req.body.password;
    const Cpassword = req.body.confirmPassword;
    if(password === Cpassword){
            const userData = new registerModel({
                firstName: req.body.firstname,
                lastName: req.body.lastname,
                email: req.body.email,
                phoneNumber: req.body.phone,
                gender: req.body.gender,
                age: req.body.age,
                password: req.body.password,
                confirmPassword: req.body.confirmPassword
            })

        //? Using authorisation middleware to generate token
        const token = await userData.generateAuthToken(); //this function is defined in model folder
        console.log("The returned token is " + token) //this will print the returned token by calling generateAuthToken() function

        //? The res.cookie() function is used to set the cookie name to value. The value parameter can be a string or object converted to json
        //? syntax is res.cookie(name, value, [options])
        res.cookie("jwt", token, { //here jwt is the name of the cookie we are creating, we can give any name of the cookie
            expires: new Date(Date.now() + 60000), //expiry time
            httpOnly: true //this makes sure the client side scripting language can not do anything to the value of the cookie
        });
        
        const result = await userData.save()
        console.log(result)
        res.render("index")

    }
    else{
        res.send("Password not matching")
    }
   } catch (error) {
    console.log(error)
    res.status(404).send("Aji lund mera error aa gaya");
   }
})


app.get('/login',(req,res)=>{
    res.render("login");
})

app.post('/login',async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(`Email: ${email}, Password: ${password}`);
        const userData = await registerModel.findOne({email: email})
        console.log(userData)

        //? Decrypting the hashed password and comparing with the password entered by the user in password field of the log in form and storing this value in a variable as a boolean
        const isMatched = await bcrypt.compare(password,userData.password)

        //? token generation while loggin in
        const token = await userData.generateAuthToken();
        console.log("The returned token is " + token)

        //! adding cookie value
        res.cookie("jwt", token, {
            expires: new Date(Date.now() + 60000),
            httpOnly: true,
            // secure: true //it only works with https not http
        });

        if(isMatched){
            res.status(201).render("index")
        }else{
            res.send("Invalid login details")
        }
    } catch (error) {
        res.status(400).send("Invalid login details catched")
    }
})


app.get("/secret", auth, (req,res)=>{
    //!first of all when this route will be hit, the auth function/middleware will be called and it will complete its task, then the below lines will be executed
    res.render("secret")
})

app.get("/logout", auth, async (req,res)=>{
    try {
        res.clearCookie("jwt") //by this we will delete the cookie from our browser and we will be logged out

        // removing the particular token which was created in the db when an user logged in
        // req.user.tokens = req.user.tokens.filter((element)=>{
        //     return element.token !== req.token //this req.token is the current token which the user generated while logging in 
        // }) //?this is used for logout from single device

        //? logout from all devices that is delete all the tokens from the database
        req.user.tokens = [];

        console.log("Logged out successfully...")
        await req.user.save(); //this req.user was set in the auth.js file and this await req.user.save() is a must otherwise the cookie will not get deleted
        res.render("login")
    } catch (error) {
        res.status(500).send(error)
    }
})


app.listen(port,()=>{
    console.log(`Listening to port number ${port}`)
})
