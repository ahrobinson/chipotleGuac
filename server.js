var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var cors = require('cors')


var port = process.env.PORT || 3000

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

app.use(express.static('app'));
app.use('/node_modules', express.static('node_modules'));
app.use('/bower_components', express.static('bower_components'));


app.listen(port, function () {
  console.log('Let there be light!');
});
