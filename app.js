'use strict';

var express = require('express'),
    app = express();

app.set('views', '/breakthecode');
app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.render('home', {});
});

app.listen(8080);
module.exports.getApp = app;
