var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.js');

var port = 3000;

var app = express();

//serving our index.html
app.use(express.static(__dirname));

app.listen(port, function () {
  console.log('Server running on port ' + port);
});
