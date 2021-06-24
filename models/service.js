const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const serviceSchema = new Schema({
    serviceid: {
        type: String,
        require: true
    },
    servicename: {
        type: String,
        require: true
    },
    imgurl: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    owner: {
        type: String,
        require: true
    },
    location: {
        type: String,
        require: true
    }
})


const Service = mongoose.model("Service", serviceSchema);
module.exports = Service;