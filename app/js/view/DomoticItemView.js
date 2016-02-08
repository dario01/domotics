define(['marionette'],
    function(Marionette) {
        return Marionette.ItemView.extend({
            className: function() {
                return 'domotic-item ' + this.model.getType();
            },

            initialize: function() {
                if (this.model) {
                    this.listenTo(this.model.getState(), 'change', this.onStateChange);
                    this.listenTo(this.model.getSettings(), 'change', this.onSettingsChange);
                }
            },

            modelEvents: {
                'change': 'render'
            },

            onStateChange: function() {
                console.log('Saving State for '+ this.model.id);
                this.model.getState().save();
                this.render();
            },

            onSettingsChange: function() {
                console.log('Saving Settings for '+ this.model.id);
                this.model.getSettings().save();
                this.render();
            },

            templateHelpers: function() {
                return this.model;
            }

        });
    }
);
