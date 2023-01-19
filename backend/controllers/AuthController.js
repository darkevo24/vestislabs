const User = require("../models/User");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

function generateAccessToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
  }

const register = function(req,res,next){
    let user = new User({
        email : req.body.email,
        password : req.body.password
    })
    try {
        user.save();
        res.json({
            message : "success"
        })
    }
    catch (err){
        res.json({
            message : "error sign up"
        })
    }
    res.end();
}

const login = function(req,res,next){
    var email = req.body.email;
    var password = req.body.password;

    User.findOne({$or : [{email : email},{password : password}]})
    .then(user => {
        if (user){
            // let token = generateAccessToken({email : email})
            // res.json(token);
            res.json({
                message : "success"
            })
        }
        else {
            res.json({
                message : "No User Found!"
            })
        }
    })
}

module.exports = {
    register,
    login
}