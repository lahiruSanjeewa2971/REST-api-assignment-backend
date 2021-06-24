const serviceRouter = require('express').Router();
let Service = require('../models/service');

serviceRouter.route("/addnewservice").post((req, res) => {
    const serviceid = req.body.serviceid;
    const servicename = req.body.servicename;
    const imgurl = req.body.imgurl;
    const category = req.body.category;
    const price = Number(req.body.price);
    const owner = req.body.owner;
    const location = req.body.location;

    const newService = new Service({
        serviceid,
        servicename,
        imgurl,
        category,
        price,
        owner,
        location
    })

    newService.save().then(() => {
        res.json("Service added..!")
    }).catch((err) => {
        console.log(err);
    })

})

serviceRouter.route("/").get((req, res) => {
    Service.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }
        else{
            res.send(err)
        }
    })
})

serviceRouter.route("/getservice").post(async (req, res) => {
    Service.find({serviceid:req.body.serviceid}, (docs, err) => {
        if(!err){
            res.send(docs);
        }
        else{
            res.send(err);
        }
    })
})

serviceRouter.route("/update").post(async (req, res) => {
    Service.findOneAndUpdate({serviceid: req.body.serviceid}, {

        servicename: req.body.servicename,
        imgurl: req.body.imgurl,
        category: req.body.category,
        price: req.body.price,
        owner: req.body.owner,
        location: req.body.location

    }, (err) => {

        if(!err){
            res.send("Item updated.....")
        }
        else{
            res.send(err)
        }

    })
})

serviceRouter.post("/delete", (req, res) => {
    Service.findOneAndDelete({serviceid: req.body.serviceid}, (err)=> {
        if(!err){
            res.send("Post deleted...")
        }
        else{
            res.send(err)
        }
    })
})


module.exports = serviceRouter;