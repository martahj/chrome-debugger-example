"use strict"

const PokemonAPI = {

	baseUrl: 'http://pokeapi.co/api/v2/',

	searchByName: (name, successCb, failureCb) => {
		let url = '/pokemon/' + name;

		$.ajax(url, {
			method: 'GET',
			cache: false
		})
		.done( (resp) => {
			successCb(resp);
		})
		.fail( (err) => {
			failureCb(err);
		})
	}

}