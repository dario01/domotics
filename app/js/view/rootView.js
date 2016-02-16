/**
 * Root View.
 *
 * @module view/RootView
 * @returns Class: {@link view/RootView}
 * @requires external:marionette
 * @requires module:view/MainView
 * @requires module:view/TopNavView
 */
"use strict";

define(['marionette', 'view/MainView', 'view/TopNavView'],
    function(Marionette, MainView, TopNavView) {
        return Marionette.LayoutView.extend(/** @lends view/RootView.prototype */ {
            /**
             * @classdesc Class representing document body.
             * @augments external:marionette.LayoutView
             * @see http://marionettejs.com/docs/marionette.layoutview.html
             * @constructs
             */
            initialize: function() {
            },

            el: 'body',
            template: false,

            /** regions: header, main, footer */
            regions: {
                header: 'header',
                main: '#main',
                footer: 'footer'
            },

            /**
             * Assigns an instance of {@link view/TopNavView} to header region
             * and an instance of {@link view/MainView} to main region.
             */
            onBeforeRender: function() {
                console.log('onBeforeRender rootView');

                this.header.show(new TopNavView());
                this.main.show(new MainView());
                //this.footer.show(new FooterView());
            }
        });
    }
);

