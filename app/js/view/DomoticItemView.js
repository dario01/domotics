define(['marionette'],
    function(Marionette) {
        return Marionette.ItemView.extend({
            initialize: function() {
                if (this.model) {
                    this.listenTo(this.model.getState(), 'change', this.onStateChange);
                    console.log('url: '+ this.model.url());
                }
            },
            className: function() {
                return 'domotic-item ' + this.model.getType();
            },
            modelEvents: {
                'change': 'render'
            },
            onStateChange: function() {
                console.log('Saving State for '+ this.model.id);
                this.model.getState().save();
            },
            onSettingsChange: function() {
                console.log('Saving Settings for '+ this.model.id);
                this.model.getSettings().save();
            },

        });
    }
);
