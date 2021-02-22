const express = require("express");
const bodyparser = require("body-parser");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const ejs = require("ejs");

const app = express();

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');

app.get("/", function(req, res){
    res.render("game");
});




app.listen(3000, function(){
    console.log("Server started at port 3000");
});

