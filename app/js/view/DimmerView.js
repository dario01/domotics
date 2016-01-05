define(['view/DomoticItemView', 'templates','jquery-ui/slider'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/dimmer.hbs'],

            ui: {
                slider: '#slider'
            },

            events: {
                'change @ui.slider': 'onSliderChange'
            },

            onSliderChange: function( event ) {
                console.log("onSliderChange: " + this.getSliderValue());
                this.model.getState().set({brightnessPercent: this.getSliderValue()});
            },

            getSliderValue: function() {
                return this.ui.slider.slider('value');
            },

            onRender: function() {
                var value = this.model.getState().brightnessPercent;
                var slider = this.ui.slider;
                slider.slider({
                    min:0, max:100,
                    value:value,
                    change: function( event, ui ) {
                        slider.trigger('change',[event, ui]);
                    }
                });
            }
        });
    }
);
