/**
 * Module dependencies.
 */

var express = require('express')
  , fs = require('fs');


/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

// Load configurations
// if test env, load example file
var env = process.env.NODE_ENV || 'development'
  , config = require('./config/config')[env];

var app = express();
// express settings
require('./config/express')(app, config);

//index.html
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
// Bootstrap routes
require('./config/routes')(app);
 
var port = process.env.PORT || 3000;
app.listen(port);


// expose app
exports = module.exports = app;


