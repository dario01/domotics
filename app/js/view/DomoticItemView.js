"use strict";

define(['marionette'],
    function(Marionette) {
        return Marionette.ItemView.extend({
            className: function() {
                return 'domotic-item ' + this.model.getType();
            },

            modelEvents: {
                'change': 'onChange'
            },

            onChange: function() {
                console.log('Saving State for '+ this.model.id);
                this.model.saveChangesOnly();
                this.render();
            },

            templateHelpers: function() {
                return this.model;
            }
        });
    }
);
