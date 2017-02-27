'use strict';

var runGenerator = require('../runGenerator');

module.exports = {
	desc: 'Creates a new electric project.',
	name: 'create',
	run: function(options, callback) {
		runGenerator('electric:app', options, function() {
			callback();
		});
	},
	yargs: function(yargs) {
		return yargs
			.options()
			.help('help')
			.argv;
	}
};
