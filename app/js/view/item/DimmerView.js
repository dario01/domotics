define(['view/DomoticItemView', 'templates','jquery-ui/slider'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/item/dimmer.hbs'],

            ui: {
                slider: '#slider'
            },

            events: {
                'change @ui.slider': 'onSliderChange'
            },

            onSliderChange: function( event ) {
                this.model.getState().set({ brightnessPercent: this.getSliderValue() });
            },

            getSliderValue: function() {
                return this.ui.slider.slider('value');
            },

            onRender: function() {
                var brightness = this.model.getState().get('brightnessPercent');
                var ctrl = this.ui.slider;
                ctrl.slider({
                    min:0, max:100,
                    value: brightness,
                    change: function( event, ui ) {
                        ctrl.trigger('change',[event, ui]);
                    }
                });
            }
        });
    }
);
