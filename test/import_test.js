'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.import = {
	setUp: function(done) {
		// setup here if necessary
		done();
	},

	default_options: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/main.js');
		var expected = grunt.file.read('test/expected/main.js');

		test.equal(actual, expected, 'Imports files according to default settings: token, comments');

		test.done();
	},

	custom_token: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/main-custom_token.js');
		var expected = grunt.file.read('test/expected/main-custom_token.js');

		test.equal(actual, expected, 'Imports file with custom token.');

		test.done();
	},

	no_comments: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/main-no_comments.js');
		var expected = grunt.file.read('test/expected/main-no_comments.js');

		test.equal(actual, expected, 'Imports file without comments.');

		test.done();
	},

	custom_comments: function(test) {
		test.expect(1);

		var actual = grunt.file.read('tmp/main-custom_comments.js');
		var expected = grunt.file.read('test/expected/main-custom_comments.js');

		test.equal(actual, expected, 'Imports file with custom comments.');

		test.done();
	}
};
