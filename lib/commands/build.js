'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Builds site and places files in dist.',
	name: 'build',
	run: function(options, callback) {
		runTask('build', function() {
			callback();
		});
	}
};
