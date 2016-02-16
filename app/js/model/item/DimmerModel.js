"use strict";

define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "Dimmer",
                "status": "OFF",
                "brightnessPercent": 0,
                "autoAdjust": false
            }
        });
    }
);
