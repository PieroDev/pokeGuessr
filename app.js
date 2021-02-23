const express = require("express");
const bodyparser = require("body-parser");
const { JSDOM } = require( "jsdom" );
const { window } = new JSDOM( "" );
const $ = require( "jquery" )( window );
const ejs = require("ejs");
var Pokedex = require('pokedex-promise-v2');

var P = new Pokedex();

const app = express();

app.use(express.static(__dirname + '/static'));
app.set('view engine', 'ejs');



app.get("/", function(req, res){

    var pokeList =[];
    var pokeId = Math.floor((Math.random()*151)+1);
    
    P.getPokemonByName(pokeId)
    .then(function(pokemonTittle){
        pokeName = pokemonTittle.name;
        console.log("Hola1");
    })
    .catch(function(error){
        console.log("There was an ERROR", error);
        console.log("Hola2");
    })
    .then(function(){
        console.log("Hola3");
        res.render("game", {pokeId: pokeId, pokeName: pokeName});
    })
    .then(function(){
        var pokeOpciones = [];
        var pokeOpcionesId = [];

        for(var i=0; i<4; i++){
            var pokeId = Math.floor((Math.random()*151)+1);
            P.getPokemonByName(pokeId)
            .then(function(pokemonTittle){
                pokeName = pokemonTittle.name;
                pokeOpciones.push(pokeName);
            })
            .then(function(){
                console.log(pokeOpciones);
                return pokeOpciones;
            })
        }
        
        
        
    })
    
    /* var pokeOpciones = [];

    for(var i=0; i<4; i++){
        var pokeId = Math.floor((Math.random()*151)+1);
        var poke = P.getPokemonByName(pokeId);
        console.log(poke.name);
    } */

    



    

});




app.listen(3000, function(){
    console.log("Server started at port 3000");
});

