/*
 * grunt-import
 * https://github.com/devex-web-frontend/grunt-import
 *
 * Copyright (c) 2013 devex-web-frontend
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Before generating any new files, remove any previously-created files.
		clean: {
			tests: ['tmp']
		},

		// Configuration to be run (and then tested).
		import: {
			default_options: {
				files: {
					'tmp/main.js': 'test/cases/main.js'
				}
			},
			custom_token: {
				options: {
					token: '$import(%F%)'
				},
				files: {
					'tmp/main-custom_token.js': 'test/cases/main-import.js'
				}
			},
			no_comments: {
				options: {
					comments: false

				},
				files: {
					'tmp/main-no_comments.js': 'test/cases/main.js'
				}
			},
			custom_comments: {
				options: {
					startComment: 'start %F%',
					endComment: 'end %F%'

				},
				files: {
					'tmp/main-custom_comments.js': 'test/cases/main.js'
				}
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}

	});

	// Actually load this plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	// Whenever the "test" task is run, first clean the "tmp" dir, then run this
	// plugin's task(s), then test the result.
	grunt.registerTask('test', ['clean', 'import', 'nodeunit']);

	// By default, lint and run all tests.
	grunt.registerTask('default', ['jshint', 'test']);

};
