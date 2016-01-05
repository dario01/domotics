define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "Dimmer",
                "@id": "Dimmer_01",
                "name": "Entrance lights",
                "location": "LivingRoom",
                "state": {
                    "status": "ON",
                    "brightnessPercent": 60
                },
                "settings": {
                    "autoAdjust": false
                }
            },
            validate: function(attrs) {

            }
        });
    }
);
