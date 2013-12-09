# grunt-import

> Grunt plugin to import files.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-import --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-import');
```

## The "import" task

### Overview
In your project's Gruntfile, add a section named `import` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  import: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.token
Type: `String`
Default value: `'_include(%F%)'`

Token that is used to import files. Use `%F%` as a placeholder for filename.

#### options.comments
Type: `Boolean`
Default value: `true`

Defines if the task should add comments at the start/end of imported content.

#### options.startComment
Type: `String`
Default value: `'START %F% =================================================='`

Comment to be inserted at the start of import. Only works if `options.comments` is set to true. Use `%F%` as a placeholder for filename.

#### options.endComment
Type: `String`
Default value: `'END %F% =================================================='`

Comment to be inserted at the end of import. Only works if `options.comments` is set to true. Use `%F%` as a placeholder for filename.

### Usage Examples

#### Default Options
```js
grunt.initConfig({
  import: {
    files: {
      'target/main.js': 'src/main.js',
    },
  },
})
```

#### Custom Options
```js
grunt.initConfig({
  import: {
    options: {
      token: '$_(%F%)',
      startComment: '%F% - start',
      endComment: '%F% - end',
    },
    files: {
      'target/main.js': 'src/main.js',
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
