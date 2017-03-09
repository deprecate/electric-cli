'use strict';

var runTask = require('../runTask');

module.exports = {
	desc: 'Builds site and and deploys dist files to git branch.',
	name: 'deploy',
	run: function(options, callback) {
		runTask('deploy', function() {
			callback();
		});
	}
};
