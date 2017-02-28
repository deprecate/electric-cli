'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Builds site, and starts up watch task along with development server.',
	name: 'run',
	run: function(options) {
		runTask('build', ['watch', 'server']);
	}
};
