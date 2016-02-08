define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "LightSwitch",
                "state" : {
                    "status": "OFF"
                }
            }
        });
    }
);
