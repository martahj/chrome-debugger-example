"use strict"

const Pokestats = {

	$template: undefined,

	findString: '.pokestat',

	init: ($pokemain) => {
		let $template = $pokemain.find(Pokestats.findString);
		Pokestats.$template = $template.clone();
	},

	getStat: (stat) => {
		let $stat = Pokestats.$template.clone();
		$stat.find('.statName').text(stat.name);
		$stat.find('.statBase').text(stat.base_stat);
		return $stat;
	},

	getAll: (arrayOfStats) => {
		return arrayOfStats.map( stat => Pokestats.getStat(stat) );
	}
}