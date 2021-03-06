//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      '**/*.html',
      'lib/karma-utils.js',
      'lib/angular/angular.js',
      'lib/angular-route/angular-route.js',
      '../node_modules/angular-mocks/angular-mocks.js',
      'blocks/*.js',
      'components/**/*.js',
      'directives/**/*.js',
    ],
    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
    ]

  });
};
