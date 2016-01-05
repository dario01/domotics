define(['view/DomoticItemView', 'templates'],
    function(DomoticItemView, templates) {
        return DomoticItemView.extend({
            template: templates['app/templates/light_switch.hbs']
        });
    }
);
