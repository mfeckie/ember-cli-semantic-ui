/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-semantic-ui',
  included: function (app) {
    app.import({
      development: 'bower_components/semantic-ui/dist/semantic.css',
      production: 'bower_components/semantic-ui/dist/semantic.min.css'
    });

    app.import({
      development: 'bower_components/semantic-ui/dist/semantic.js',
      production: 'bower_components/semantic-ui/dist/semantic.min.js'
    });

    var extensions = ['eot','otf','svg','ttf','woff','woff2'];
    extensions.forEach(function(ext) {
      app.import('bower_components/semantic-ui/dist/themes/default/assets/fonts/icons.' + ext, {
        destDir: 'assets/themes/default/assets/fonts'
      });
    });
  }
};
