"use strict";

define(['jquery', 'handlebars', 'templates', 'underscore', 'config'],
    function($, Handlebars, templates, _, config) {
        console.log('System Initialization');

        function configureHandlebars() {
            console.log('Configuring Handlebars');

            Handlebars.registerPartial('domoticTile', templates['app/templates/domotic_tile_partial.hbs']);

            Handlebars.registerHelper('withConfig', function(options) {
                return options.fn(config);
            });

            Handlebars.registerHelper('eq', function(a, b, options) {
                if ( a == b ) {
                    return options.fn(this);
                } else {
                    return options.inverse(this);
                }
            });
        }

        function configureUnderscore() {
            console.log('Configuring Underscore');

            _.mixin({
                camel2Underscore: function(string){
                    return string.replace(/([^A-Z])([A-Z])/g,'$1_$2').toLowerCase();
                }
            });
        }

        configureHandlebars();
        configureUnderscore();
    }
);

