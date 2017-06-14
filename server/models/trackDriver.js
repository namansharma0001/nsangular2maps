var Schema = require('mongoose').Schema

var trackRecord = new Schema({
    ltd: String,
    lng: String,
    time: Date
})


var trackDriver = new Schema({
    _id:String,
    trackRecord:[trackRecord],
    status:String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

module.exports = trackDriver
