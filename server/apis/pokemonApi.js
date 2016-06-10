"use strict"

const Fetch = require('node-fetch');

const PokemonApi = {};
module.exports = PokemonApi;

const baseUrl = 'http://pokeapi.co/api/v2/';

PokemonApi.searchByName = (name) => {
	let additionalUrl = 'pokemon/';
	let url = baseUrl + additionalUrl + name;

	return Fetch(url)
	  .then( resp => resp.json() )
	  .catch( (err) => {
	  	console.log('error searching by name', err);
	  	throw err;
	  })

}