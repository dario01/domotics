define(['model/DomoticItemModel','model/DimmerModel','model/LightSwitchModel'],
    function(DomoticItem, Dimmer, LightSwitch) {

        var DOMOTIC_MODEL_MAP = {
            'Dimmer': Dimmer,
            'LightSwitch': LightSwitch
        };

        return function(type) {
            return DOMOTIC_MODEL_MAP[type] || DomoticItem.extend({
                    defaults: {
                        '@type': type
                    }
                });
        };
    }
);
