"use strict"

const Pokemain = {

	$pokemain: undefined,
	// $typenameTemplate: undefined,

	data: {},

	attached: [ Typename ],


	init: () => {
		console.log('this in init', this);
		console.log('Pokemain', Pokemain);
		let $pokemain = $('.pokemain');
		console.log('$pokemain', $pokemain);
		Pokemain.$pokemain = $pokemain.clone();

		//Other modules with DOM elems need to be initialized
		let $p = Pokemain.$pokemain;

		console.log('this.attached', Pokemain.attached);
		Pokemain.attached.forEach( (module) => { 
			module.init($p)
			$p.find(module.findString).remove();
		} );

		console.log('out end pokemain template', Pokemain.$pokemain);

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

		console.log('going to display info', $pokemain);

		$('#mainbar').find('.box').append($pokemain);

		// Pokemain.attached.forEach( (module) => {
		// 	module.showAll(data);
		// })


	}

}