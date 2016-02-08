define(['view/DomoticItemView', 'templates','jquery-ui/spinner'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/item/air_conditioner.hbs'],

            ui: {
                spinner: '#spinner',
                on: '#ON',
                off: '#OFF'
            },

            events: {
                'click @ui.on':  function() { this.model.setStatus('ON');  },
                'click @ui.off': function() { this.model.setStatus('OFF'); },
                'change @ui.spinner': 'onSpinnerChange'
            },

            onSpinnerChange: function( event ) {
                this.model.getState().set({ targetTempCelcius: this.getSpinnerValue() });
            },

            getSpinnerValue: function() {
                return this.ui.spinner.spinner('value');
            },

            onRender: function() {
                var value = this.model.getState().get('targetTempCelcius');
                var ctrl = this.ui.spinner;
                ctrl.spinner({
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
