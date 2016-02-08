define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "Dimmer",
                "state": {
                    "status": "OFF",
                    "brightnessPercent": 0
                },
                "settings": {
                    "autoAdjust": false
                }
            }
        });
    }
);
