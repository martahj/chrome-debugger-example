"use strict"

const SendR = require('../sendR.js');
const PokemonApi = require('../apis/pokemonApi.js');

const PokemonApiRoute = require('express').Router();
module.exports = PokemonApiRoute;



PokemonApiRoute.get('/:pokemon', (req, res) => {
	let pokemon = req.params.pokemon;

	return PokemonApi.searchByName(pokemon)
	.then( (data) => {
		SendR.sendData(res, 200, data);
	})
	.catch( (err) => {
		SendR.sendData(res, 500, err);
	})
})