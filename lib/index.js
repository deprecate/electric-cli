'use strict';

var requireDir = require('require-dir');
var yargs = require('yargs');
var chalk = require('chalk');

var Command = require('./Command');

function cli() {
	var commands = requireDir('./commands');

	Object.keys(commands).forEach(function(name) {
		Command.register(commands[name]);
	});

	var command;

	if (Command.getName()) {
		command = Command.get();
	}
	else {
		command = Command.get('dev');
	}

	if (command) {
		var args = Command.getArgv();

		console.info('Running ' + chalk.cyan('\'' + command.name + '\'') + '...');

		command.run(args, function() {
			console.info('Finished ' + chalk.cyan('\'' + command.name + '\'') + '...');
			process.exit(0);
		});
	}
	else {
		console.error(chalk.red('Error: ') + 'Invalid command ' + chalk.cyan('\'' + Command.getName() + '\''));
		process.exit(1);
	}
}

module.exports = cli;
