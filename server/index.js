const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
require('dotenv').config();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', function (req, res) {
  console.log(req.headers?.authorization);
  res.json({a: 'aaa'});
});
app.listen(process.env.PORT, function () {
  console.log('started website on http://localhost:' + process.env.PORT);
});

module.exports = app;
