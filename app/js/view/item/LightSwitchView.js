define(['view/DomoticItemView', 'templates'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/item/light_switch.hbs'],

            ui: {
                on: '#ON',
                off: '#OFF'
            },

            events: {
                'click @ui.on' : function() { this.model.setStatus('ON');  },
                'click @ui.off': function() { this.model.setStatus('OFF'); }
            }
        });
    }
);
