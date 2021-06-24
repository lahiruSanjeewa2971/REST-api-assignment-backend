const express = require('express')
var app = express()
const mongoose = require('mongoose')

const router = express.Router()



var Usermodel = mongoose.model('sellers', {fname:String, lname: String, username: String, password: String, phone:String, country: String, region: String, address:String, companyName: String, email: String})

router.post('/sellerRegister', function(req, res){

    

    var newuser = new Usermodel({fname:req.body.fname, lname:req.body.lname, username:req.body.username, password: req.body.password,phone: req.body.phone,country:req.body.country,region: req.body.region, address: req.body.address, companyName:req.body.companyName, email: req.body.email})

    newuser.save(function(err){
        if(err){
            res.send("something went wrong")
        }else{
            res.send("Seller registration successfully")
        }
    })
})
router.post('/sellerLogin', function(req, res){
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
                res.send(" Seller login successfull")
            }
        }
    })
})
module.exports = router
