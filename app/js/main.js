/**
 * Application Entry Point
 *
 * @overview Manages the configuration of all AMD modules in the application.
 * @see http://requirejs.org/docs/api.html
 */
require.config({
    paths: {
        /**
         * jQuery library
         * @external jquery
         * @see http://api.jquery.com/
         * @see https://github.com/jquery/jquery
         */
        'jquery': 'lib/jquery/dist/jquery',

        /**
         * jQuery UI library
         * @external jquery-ui
         * @see http://api.jqueryui.com/
         * @see https://github.com/jquery/jquery-ui
         */
        'jquery-ui': 'lib/jquery-ui/ui',

        /**
         * Bootstrap library
         * @external bootstrap
         * @see http://getbootstrap.com/
         * @see https://github.com/twbs/bootstrap
         */
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap',

        /**
         * Bootstrap Tree View library
         * @external bootstrap-treeview
         * @see https://github.com/jonmiles/bootstrap-treeview
         * @see http://jonmiles.github.io/bootstrap-treeview/
         */
        'bootstrap-treeview': 'lib/bootstrap-treeview/dist/bootstrap-treeview.min',

        /**
         * Underscore.js library
         * @external underscore
         * @see http://underscorejs.org/
         * @see https://github.com/jashkenas/underscore
         */
        'underscore': 'lib/underscore/underscore',

        /**
         * Handlebars.js library
         * @external handlebars
         * @see http://handlebarsjs.com/
         * @see https://github.com/wycats/handlebars.js
         */
        'handlebars': 'lib/handlebars/handlebars',

        /**
         * Backbone.js library
         * @external backbone
         * @see http://backbonejs.org/
         * @see https://github.com/jashkenas/backbone
         */
        'backbone': 'lib/backbone/backbone',

        /**
         * Marionette.js library
         * @external marionette
         * @see http://marionettejs.com/
         * @see https://github.com/marionettejs/backbone.marionette
         */
        'marionette': 'lib/marionette/lib/backbone.marionette',

        // Generated sources
        'templates': '../../dist/precompiled.handlebars',
    },
    shim : {
        "bootstrap" : { "deps" :['jquery'] }
    },
    deps: ['jquery', 'bootstrap', 'init']
});

/**
 * System Entry Point
 */
require(['jquery','app'],
    function($, app) {
        console.log('System entry point');

        $(function() {
            app.start();
        });
    }
);