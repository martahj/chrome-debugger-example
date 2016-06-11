"use strict"

const Pokemain = {

	$pokemain: undefined,
	// $typenameTemplate: undefined,

	data: {},

	attached: [ Typename, Pokestats ],


	init: () => {
		console.log('this in init', this);
		let $pokemain = $('.pokemain');
		Pokemain.$pokemain = $pokemain.clone();

		//Other modules with DOM elems need to be initialized
		let $p = Pokemain.$pokemain;
		Pokemain.attached.forEach( (module) => { 
			module.init($p)
			$p.find(module.findString).remove();
		} );

		$pokemain.remove();
	},

	displaySearchResults: (dataFromApi) => {
		$('.pokemain').remove();
		Pokemain.data = dataFromApi;
		Pokemain.displayInfo();
	},

	displayInfo: () => {

		let data = Pokemain.data;

		let $pokemain = Pokemain.$pokemain.clone();

		$pokemain.find('.pokename').text(data.name);
		$pokemain.find('.pokenumber').text(data.id);
		$pokemain.find('.pokeheight').text(data.height);
		$pokemain.find('.pokeweight').text(data.weight);
		$pokemain.find('.poketypes').append( Typename.getAll(data.types) );
		$pokemain.find('.pokestats').append( Pokestats.getAll(data.stats) );

		console.log('going to display info', $pokemain);

		$('#mainbar').find('.box').append($pokemain);

	}

}