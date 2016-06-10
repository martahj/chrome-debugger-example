"use strict"

const Container = {

	$template: undefined,

	init: () => {

		var $container = $('.container');
		this.$template = $container.clone();
		// $container.remove();
		
	}
}