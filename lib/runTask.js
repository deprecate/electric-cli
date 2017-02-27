'use strict';

module.exports = function(tasks, callback) {
	var runSequence = require('run-sequence');
	var electric = require('electric');
	var gulp = require('gulp');

	runSequence.use(gulp);
	electric.registerTasks({
		gulp: gulp
	});

	runSequence(tasks, callback);
};
