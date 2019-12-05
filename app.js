/**
* Module dependencies
*/
const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const twitterRoute = require('./routes/twitter.routes');
require('dotenv').config();

// Config port express
app.set("port", process.env.PORT);

// Configs ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static(__dirname + "/views")) 

// Routes
app.use("/", twitterRoute);


app.listen(process.env.PORT, function () {
  console.log("Example app listening on port " + process.env.PORT);

});