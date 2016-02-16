"use strict";

define(['model/DomoticItemModel'],
    function(DomoticItem) {
        return DomoticItem.extend({
            defaults: {
                "@type": "LightSwitch",
                "status": "OFF"
            }
        });
    }
);
