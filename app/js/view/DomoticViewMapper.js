define(['util/memoize', 'underscore', 'templates', 'view/DomoticItemView',
        'view/item/AirConditionerView', 'view/item/CurtainsView', 'view/item/DimmerView','view/item/LightSwitchView'],
    function(memoize, _ , templates, DomoticItemView,
             AirConditionerView, CurtainsView, DimmerView, LightSwitchView) {

        var DOMOTIC_VIEW_MAP = {
            'AirConditioner': AirConditionerView,
            'Curtains': CurtainsView,
            'Dimmer': DimmerView,
            'LightSwitch': LightSwitchView
        };

        return memoize(
            function(type) {
                return DOMOTIC_VIEW_MAP[type] || DomoticItemView.extend({
                        template: templates['app/templates/item/' + _(type).camel2Underscore() + '.hbs']
                    });
            }
        );
    }
);
