const express = require('express');
const app = express();
const mongodb = require('./mongodb.js');
const config = require('./config.js');
const bodyParser = require('body-parser')
var ObjectID = require('mongodb').ObjectID;

var db


app.listen(9999, function() {
    console.log('Node server listening on 9999')
})

app.use(express.static(__dirname + 'public'));

//making cross domain stuff - CORS - work (so much easier than it was with python)
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, DELETE");
   
    
    next();
});

app.get('/', function(req, res) {
    res.sendFile('index.html')
})

mongodb.connectToServer(function(err) {

    app.use(bodyParser.json())

    //******LISTEN: get reference to db ******
    app.listen(config.server.port, function() {
        console.log('Node server listening on ' + config.server.port);
        db = mongodb.getDb();
    });


    //******GET******
    //not currently being used
    app.get('/allcars', function(req, res) {
        db.collection('cars').find().toArray(function(err, results) {

            res.json(results);
        })
        res.set({
            'Cache-Control': 'no-cache'
        });
    });

    app.post('/addcar', (req, res) => {
       
        db.collection('cars').save(req.body, (err, result) => {
            if (err) return console.log(err)
            res.send(req.body);
        })
    })


    app.delete('/deletecar', (req, res) => {
        

        //have to send this as a MONGO ObjectID object.
        var p = new ObjectID(req.body.data);
        var data={"_id":p}
        db.collection('cars').remove(data,
            (err, result) => {
                if (err) return res.send(500, err)
                res.send('car deleted!'); 
            })
    })
     
        
    app.put('/updatecar', function(req, res) {
         console.log("id "+req.body.carIDX)
        console.log("name "+req.body.carName)
        console.log("year "+req.body.year)
        //var p = new ObjectID(req.body._id);
        //var w=Number(req.body.weight)
        var p = new ObjectID(req.body.carIDX);
        var data={_id:p, name: req.body.carName, year:req.body.year}
        console.log("onserver "+JSON.stringify(data))
        db.collection('cars').findOneAndUpdate({"_id":data._id}, {$set:{"name":data.name, "year":data.year}}, (err, result) => {
                if (err) return res.send(500, err)
                res.send("done")
                console.log(JSON.stringify(res.body))

            });
      
    });
});
