'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Starts development server for local testing.',
	name: 'server',
	run: function(options) {
		runTask('server');
	},
	yargs: function(yargs) {
		return yargs
			.options()
			.help('help')
			.argv;
	}
};
