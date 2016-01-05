define(['view/DomoticItemView', 'underscore', 'templates',
        'view/DimmerView','view/LightSwitchView'],
    function(DomoticItemView, _ , templates,
             DimmerView, LightSwitchView) {

        var DOMOTIC_VIEW_MAP = {
            'Dimmer': DimmerView,
            'LightSwitch': LightSwitchView
        };

        return function(type) {
            return DOMOTIC_VIEW_MAP[type] || DomoticItemView.extend({
                    template: templates['app/templates/' + _(type).camel2Underscore() + '.hbs']
                });
        };
    }
);
