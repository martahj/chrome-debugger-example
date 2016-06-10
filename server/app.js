"use strict"

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');


//Define folder paths
const clientFolder = path.resolve(__dirname, '../', 'client');


// Initialize app
const app = express();

app.use( bodyParser.json() )

// Static assets
app.use(express.static(clientFolder));


/*
  Routes
*/

// pokemon router
const PokemonApiRoutes = require('./apiRoutes/pokemonApiRoute.js');
app.use('/pokemon', PokemonApiRoutes);


// Get server to listen
const port = 7000;
app.listen(port);
console.log('listening on port', port);