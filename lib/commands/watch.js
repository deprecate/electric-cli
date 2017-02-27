'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Watches for changes to src files.',
	name: 'watch',
	run: function(options) {
		runTask('watch');
	},
	yargs: function(yargs) {
		return yargs
			.options()
			.help('help')
			.argv;
	}
};
