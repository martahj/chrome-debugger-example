"use strict"

const PokemonAPI = {

	baseUrl: 'http://pokeapi.co/api/v2/',

	searchByName: (name, successCb, failureCb) => {
		return new Promise( (resolve, reject) => {
			let url = '/pokemon/' + name;

			$.ajax(url, {
				method: 'GET',
				cache: false
			})
			.done( (resp) => {
				resolve(resp);
			})
			.fail( (err) => {
				reject(err);
			})
		})
	}

}