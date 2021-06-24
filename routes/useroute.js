const express = require('express')
var app = express()
const mongoose = require('mongoose')
const router = express.Router()



var Usermodel = mongoose.model('users', {
    fname:String, 
    lname: String, 
    username: String, 
    password: String, 
    phone:String, 
    address: String
})

router.post('/register', function(req, res){
    var newuser = new Usermodel({
        fname:req.body.fname, 
        lname:req.body.lname, 
        username:req.body.username, 
        password: req.body.password,
        phone: req.body.phone, 
        address: req.body.address
    })
    newuser.save(function(err){
        if(err){
            res.send("something went wrong")
        }else{
            res.send("User registration successfully")
        }
    })
})
router.post('/login', function(req, res){
    Usermodel.find({
        username:req.body.username,
        password: req.body.password
    }, function(err, documents){
        if(err){
            res.send("Something went wrong")
        }else{
            if(documents.length == 0){
                res.send('error')
            }else{
                res.send("login successfull")
            }
        }
    })
})
module.exports = router
