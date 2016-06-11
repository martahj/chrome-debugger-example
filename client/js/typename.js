"use strict"

const Typename = {

	$template: undefined,

	findString: '.typename',

	init: ($pokemain) => {
		let $typename = $pokemain.find(Typename.findString);
		Typename.$template = $typename.clone();
	},

	getAll: (arrayOfTypes) => {
		return arrayOfTypes.map( type => Typename.getType(type) );
	},

	getType: (type) => {
		let $typeTemplate = Typename.$template.clone();
		$typeTemplate.text(type.type.name);
		return $typeTemplate;
	}



}