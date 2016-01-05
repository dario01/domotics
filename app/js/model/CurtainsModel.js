define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "Curtains",
                "@id": "Curtains_02",
                "name": "Garden entrance curtains",
                "location": "LivingRoom",
                "state": {
                    "status": "OPEN",
                    "openPercent": 80,
                    "targetOpenPercent": 80
                }
            }
            ,
            validate: function(attrs) {

            }
        });
    }
);
