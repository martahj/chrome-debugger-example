"use strict"

const Pokemain = {

	$pokemain: undefined,

	data: {},

	attached: [ Typename, Pokestats ],


	init: () => {

		//Set up template
		let $pokemain = $('.pokemain');
		Pokemain.$pokemain = $pokemain.clone();

		//Other modules with DOM templates need to be initialized
		let $p = Pokemain.$pokemain;
		Pokemain.attached.forEach( (module) => { 
			module.init($p)
			$p.find(module.findString).remove();
		} );

		//Remove our placeholder div
		$pokemain.remove();
	},

	displaySearchResults: (dataFromApi) => {

		//Clear the DOM
		$('.pokemain').remove();

		//store data
		Pokemain.data = dataFromApi;

		//show results
		Pokemain.displayInfo();
	},

	displayInfo: () => {

		let data = Pokemain.data;

		let $pokemain = Pokemain.$pokemain.clone();

		//Turn data into DOM magic
		$pokemain.find('.pokename').text(data.name);
		$pokemain.find('.pokenumber').text(data.id);
		$pokemain.find('.pokeheight').text(data.height);
		$pokemain.find('.pokeweight').text(data.weight);
		$pokemain.find('.poketypes').append( Typename.getAll(data.types) );
		$pokemain.find('.pokestats').append( Pokestats.getAll(data.stats) );

		// Append our new object to main bar
		$('#mainbar').append($pokemain);
	}

}