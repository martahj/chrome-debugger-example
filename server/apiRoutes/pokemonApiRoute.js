"use strict"

const SendR = require('../sendR.js');
const PokemonApi = require('../apis/pokemonApi.js');

const PokemonApiRoute = require('express').Router();
module.exports = PokemonApiRoute;



PokemonApiRoute.get('/:pokemon', (req, res) => {
	let pokemon = req.params.pokemon;
	console.log('trying to get info for pokemon', pokemon);

	return PokemonApi.searchByName(pokemon)
	.then( (data) => {
		console.log('success getting data from api!');
		SendR.sendData(res, 200, data);
	})
	.catch( (err) => {
		console.log('error getting data from api');
		SendR.sendData(res, 500, err);
	})
})