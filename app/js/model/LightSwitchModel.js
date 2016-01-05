define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "LightSwitch",
                "@id": "LightSwitch_05",
                "name": "Kitchen main lights",
                "location": "Kitchen",
                "state" : {
                    "status": "OFF"
                }
            },
            validate: function(attrs) {

            }
        });
    }
);
