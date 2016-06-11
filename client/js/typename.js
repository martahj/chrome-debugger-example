"use strict"

const Typename = {

	$template: undefined,

	findString: '.typename',

	init: ($pokemain) => {
		console.log('passing $pokemain into init', $pokemain);

		let $typename = $pokemain.find(Typename.findString);
		console.log('our typename is going to be', $typename);

		Typename.$template = $typename.clone();

		console.log('in typename init', Typename.$template);
	},

	getElem: (type) => {

		let $type = Typename.$template.clone();

		$type.find('.typetext').text(type.type.name);

		return $type;

	},

	getAll: (arrayOfTypes) => {
		return arrayOfTypes.map( type => Typename.getType(type) );
	},

	getType: (type) => {
		console.log('type in showType', type);
		let $typeTemplate = Typename.$template.clone();
		console.log('making template object', $typeTemplate);
		$typeTemplate.text(type.type.name);
		return $typeTemplate;
		// $('.poketypes').append($typeTemplate);
	},

	showAll: (data) => {
		let types = data.types;

		console.log('showing types', types);
		types.forEach( (type) => {
			Typename.getType(type);
		})
	}


}