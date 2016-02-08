define(['view/DomoticItemView', 'templates','jquery-ui/slider'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/item/curtains.hbs'],

            ui: {
                slider: '#slider'
            },

            events: {
                'change @ui.slider': 'onSliderChange'
            },

            onSliderChange: function( event ) {
                this.model.getState().set({ targetOpenPercent: this.getSliderValue() });
            },

            getSliderValue: function() {
                return this.ui.slider.slider('value');
            },

            onRender: function() {
                var value = this.model.getState().get('targetOpenPercent');
                var ctrl = this.ui.slider;
                ctrl.slider({
                    min:0, max:100,
                    value: value,
                    change: function( event, ui ) {
                        ctrl.trigger('change',[event, ui]);
                    }
                });
            }
        });
    }
);
