var mongoose = require('mongoose')
mongoose.Promise = global.Promise

const MONGO_URL = require('../enviornment').dbUrl
const trackDriver = require('./trackDriver')

var db = mongoose.connection

db.on('error', function (error) {
    console.log('DB connection error.')
})
db.on('connected', function () {
    console.log('Connected to DB.')
})
db.on('reconnected', function () {
    console.log('Reconnected to DB.')
})
db.on('disconnected', function () {
    console.log('Disconnected from DB.')
    mongoose.connect(MONGO_URL,
        {
            server: {
                auto_reconnect: true, reconnectTries: Number.MAX_VALUE,
                socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 }
            }
        })
})

mongoose.connect(MONGO_URL, { server: { auto_reconnect: true, reconnectTries: Number.MAX_VALUE } })

var TrackDriver = db.model('TrackDriver', trackDriver, 'TrackDriver')


module.exports = {
    TrackDriver
}
