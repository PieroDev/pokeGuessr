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
    /* var idOpciones = [];
    var pokeOpciones = [];
    var listaPokes = [];
    var idCorrecta = idOpciones[ Math.floor((Math.random()*4)+1)] ;
    var pokeCorrecto = pokeOpciones[ Math.floor((Math.random()*4)+1)] ;

    nuevasOpciones();
    impOpciones();
    res.render("game", {pokeId: idCorrecta, pokeName: pokeCorrecto});


    

    function nuevasOpciones(){
        for(i=0; i>4; i++){
            var pokeId = Math.floor((Math.random()*151)+1); 
            var poke = P.getPokemonByName(pokeId);
            idOpciones.push(pokeId);
            pokeOpciones.push(poke.name);
            console.log(poke.name);
        }
    }

    function impOpciones(){
        console.log(pokeOpciones);
    } */

    var pokeId = Math.floor((Math.random()*151)+1);
    
    P.getPokemonByName(pokeId)
    .then(function(pokemonTittle){
        pokeName = pokemonTittle.name;
   
    })
    .catch(function(error){
        console.log("There was an ERROR", error);
    })
    .then(function(){

        res.render("game", {pokeId: pokeId, pokeName: pokeName});
    })




    

});




app.listen(3000, function(){
    console.log("Server started at port 3000");
});

