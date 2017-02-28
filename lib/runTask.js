'use strict';

module.exports = function() {
	var runSequence = require('run-sequence');
	var electric = require('electric');
	var gulp = require('gulp');

	var logger = require('./logger');

	logger(gulp);
	runSequence.use(gulp);
	electric.registerTasks({
		gulp: gulp
	});

	runSequence.apply(null, arguments);
};
