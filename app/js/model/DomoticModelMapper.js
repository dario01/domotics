define(['util/memoize', 'model/DomoticItemModel',
        'model/item/CurtainsModel', 'model/item/DimmerModel','model/item/LightSwitchModel'],
    function(memoize, DomoticItem,
             Curtains, Dimmer, LightSwitch) {

        var DOMOTIC_MODEL_MAP = {
            'Curtains': Curtains,
            'Dimmer': Dimmer,
            'LightSwitch': LightSwitch
        };

        return memoize(
            function(type) {
                return DOMOTIC_MODEL_MAP[type] || DomoticItem.extend({
                        defaults: {
                            '@type': type
                        }
                    });
            }
        );
    }
);
