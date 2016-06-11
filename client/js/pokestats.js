"use strict"

const Pokestats = {

	$template: undefined,

	findString: '.pokestat',

	init: () => {

		let $template = $(findString);
		Pokestats.$template = $template.clone();

	},

	showStat: (stat) => {
		let $stat = Pokestats.$template.clone();
		$stat.find('.statName').text(stat)
	},

	showAll: (data) => {
		let stats = data.stats;

		stats.forEach( (stat) => {
			Pokestats.showStat(stat);
		})
	}
}