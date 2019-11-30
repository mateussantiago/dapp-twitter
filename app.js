/**
* Module dependencies
*/
const express = require('express');
const path = require('path');
const app = express();
const twitterRoute = require('./routes/twitter.routes');

// Configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', twitterRoute);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');

});