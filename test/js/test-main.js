var TEST_REGEXP = /^\/base\/test\/(.*)(spec|test)\.js$/i;

// Get a list of all the test files to include
var allTestFiles = Object.keys(window.__karma__.files).filter(function (file) {
        return TEST_REGEXP.test(file)
    });

require.config({
    // Karma serves files under /base, which is the basePath from your config file
    baseUrl: '/base/app/js',

    paths: {
        // Libraries
        'jquery': 'lib/jquery/dist/jquery',
        'jquery-ui': 'lib/jquery-ui/ui',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap',
        'bootstrap-treeview': 'lib/bootstrap-treeview/dist/bootstrap-treeview.min',
        'underscore': 'lib/underscore/underscore',
        'handlebars': 'lib/handlebars/handlebars',
        'backbone': 'lib/backbone/backbone',
        'marionette': 'lib/marionette/lib/backbone.marionette',

        // Generated sources
        'templates': '../../dist/precompiled.handlebars',
    },

    deps: [
        'init'
    ].concat(allTestFiles), // dynamically load all test files

    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});
