const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var mongoose = require('mongoose')
var dbUrl = require('./server/enviornment').dbUrl
var cookieParser = require('cookie-parser')
var moment = require('moment')
const TrackDriver = require('./server/models').TrackDriver


const app = express();

app.use(cookieParser('qwertyuiop123456789'))
const cookieExpirationDate = new Date()
const cookieExpirationDays = 365
cookieExpirationDate.setDate(cookieExpirationDate.getDate() + cookieExpirationDays)


// const api = require('./server/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'dist')))
// app.use('/api', api)

app.get('*', (req, res) => {

  console.log(path.join(__dirname, 'dist/index.html'))
  res.sendFile(path.join(__dirname, 'dist/index.html'), function (err) {
    if (err) {
      console.log('Build Angular Project!!!')
    }
  })
})

const port = process.env.PORT || '3000'

app.set('port', port)

const server = http.createServer(app)

var io = require('socket.io')(server)

io.on('connection', function (socket) {
      function getData(callback) {
        TrackDriver.find().sort({'createdAt':-1}).limit(1).exec(function(err, doc) {
          callback(doc);
        });

      }

    var id;
    if(id !== ''){
      console.log("doing stuff")
        getData(data => {
            trackRiderData = data
            console.log(data);
            io.to(socket.id).emit('trackRiderData', trackRiderData[0])
        })
    }
    socket.on('riderLocation', function(data){
        console.log(data);
        if(data){
          id = data.id
          if(data.ltd == -1 && data.lng == -1){

            var newTrack = new TrackDriver({
                                            _id:id,
                                            status:"In Transit"
                                            })
              newTrack.save(function(err,done) {

              })
          }else if(data.ltd == 0 && data.lng == 0){

            TrackDriver.update({_id:id}, {$set: {
                            'status':"Completed"
                         }},function(err,response){
                           console.log(err);
                           console.log(response);
                           console.log("completion");
                         });

          }else{
            console.log(id);
            console.log("_id");
            var trackRecord = { ltd:data.ltd,lng:data.lng,time:new Date() };
            TrackDriver.update({_id:id}, {$addToSet: {
                              "trackRecord":trackRecord
                         }},function(err,response) {
                         });
          }
        }

      io.to(socket.id).emit('trackRiderData', trackRiderData[0])

    })


})

server.listen(port, () => console.log('\x1b[36m%s\x1b[0m','['+moment().format('dddd, MMMM Do YYYY, h:mm:ss a')+'] '+`Server running on http://localhost:${port}`))
