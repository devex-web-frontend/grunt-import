/*
 * grunt-import
 * https://github.com/devex-web-frontend/grunt-import
 *
 * Copyright (c) 2013 devex-web-frontend
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	var Path = require('path');

	grunt.registerMultiTask('import', 'Grunt plugin to import files.', function() {
		var options = this.options({
			token: '_include(%F%)',
			comments: 'true',
			startComment: 'START %F% ==================================================',
			endComment: 'END %F% =================================================='
		});

		// Iterate over all specified file groups.
		this.files.forEach(function(file) {
			var srcFile = file.src[0];

			if (!srcFile) {
				grunt.fail.warn('Source file "' + file.orig.src + '" not found.');
			}

			var absPathToSrcFile = Path.resolve(file.src[0]);
			var srcDir = Path.dirname(absPathToSrcFile);
			var srcExt = Path.extname(srcFile);

			var src = grunt.file.read(srcFile);

			/* remove trailing semicolon */
			var token = options.token.replace(/;?$/g, '') + ';?';

			/* escape special symbols */
			token = token.replace(/([\$\(\)\.])/g, '\\$1');

			/* replace %F% with RegExp for file name */
			token = token.replace('%F%', '[\'"]?([\\w\\/\\.-]+)[\'"]?');

			/* make it RegExp */
			token = new RegExp(token, 'g');

			src = src.replace(token, function(match, filename) {
				var str = '',
						startComment = options.startComment.replace('%F%', filename),
						endComment = options.endComment.replace('%F%', filename);

				if (options.comments) {
					str +='/* ' + startComment + ' */\r\n';
				}

				str += grunt.file.read(Path.join(srcDir, filename)) + '\r\n';

				if (options.comments) {
					str += '/* ' + endComment + ' */\r\n';
				}

				return grunt.util.normalizelf(str);
			});

			grunt.file.write(file.dest, src);
			grunt.log.writeln('File "' + file.dest + '" created.');
		});
	});

};
