"use strict"

const Pokesearch = {

	init: () => {

		$('#pokesearch').submit( function(e) {
			e.preventDefault();
			let pokemon = $('#pokemon').val().toLowerCase();
			// let pokemon = $('#pokename').val();

			Pokesearch.search(pokemon);
		})
	},

	search: (pokemon) => {

		return PokemonAPI.searchByName(pokemon)
		.then( (data) => {
			console.log('got data for pokemon', pokemon, data);
			Pokemain.displaySearchResults(data);
		})
		.catch( (err) => {
			console.log('our promise died', err);
		})
	}
}