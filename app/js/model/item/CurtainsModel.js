define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "Curtains",
                "state": {
                    "status": "CLOSED",
                    "sensorOpenPercent": 0,
                    "targetOpenPercent": 0
                }
            }
        });
    }
);
