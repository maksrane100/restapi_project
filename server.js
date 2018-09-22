var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = 4200;
var cors = require('cors');

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/demo_database';
mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error'));


// Use middlewares to post json data to the server
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var userRouter = require('./src/routes/userRoutes');
app.use('/users', userRouter);

var restaurantRouter = require('./src/routes/restaurantRoutes');
app.use('/restaurants', restaurantRouter);


app.get('/', (req, res) => {
    res.json({"message": "Let's create REST API using nodejs, mongoose, expressjs."});
});

// Start the server
app.listen(port, function(){
  console.log('Server is running on Port: ',port);
});
