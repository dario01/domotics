/**
 * Main Application object - Singleton.
 *
 * @module app
 * @returns Singleton: {@link App}
 *
 * @requires external:backbone
 * @requires external:marionette
 * @requires module:view/RootView
 * @requires module:router/MainRouter
 */
"use strict";

define(['backbone','marionette','view/RootView','router/MainRouter'],
    function(Backbone, Marionette, RootView, MainRouter) {
        return new (Marionette.Application.extend(/** @lends App.prototype */ {
            /**
             * @classdesc Responsible for starting up the application's view and router components.
             * @augments external:Marionette.Application
             * @see http://marionettejs.com/docs/marionette.application.html
             * @constructs
             */
            initialize: function() {},

            /** @type view/RootView */
            rootView: new RootView(),

            /** @type router/MainRouter */
            mainRouter: new MainRouter(),

            /**
             * Start monitoring Browser hash changes
             * And render the views for the first time.
             *
             * @see http://backbonejs.org/#History-start
             */
            onStart: function() {
                console.log('starting app');
                Backbone.history.start();
                this.rootView.render();
            }
        }));
    }
);
