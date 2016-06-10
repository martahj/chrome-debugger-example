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
		// console.log('would make ajax request with name', pokemon);

		let successCb = (data) => {
			console.log('got data back when searching for', pokemon, ':', data);
		};

		let failureCb = (err) => {
			console.log('got error when searching for', pokemon, ':', err);
		};

		PokemonAPI.searchByName(pokemon, successCb, failureCb);
		//get pokemon stuff
		//add
	}
}