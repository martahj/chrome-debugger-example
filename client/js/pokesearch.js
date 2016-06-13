"use strict"

const Pokesearch = {

	init: () => {

		$('#pokesearch').submit( function(e) {
			e.preventDefault();
			let pokemon = $('#pokemon').val();
			console.log('going to send get request for', pokemon);

			Pokesearch.search(pokemon);
		})
	},

	search: (pokemon) => {

		return PokemonAPI.searchByName(pokemon)
		.then( (data) => {
			Pokemain.displaySearchResults(data);
		})
		.catch( (err) => {
			console.log('our promise died', err);
		})
	}
}