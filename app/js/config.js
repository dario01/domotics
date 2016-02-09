/**
 * Application Configuration
 *
 * @module config
 */
define([],
    function() {
        return /** @lends module:config */ {
            /** Auto Refresh Interval (ms)
             * @see view/DomoticListView
             */
            "autoRefreshInterval": 10000,

            /** REST API end-points */
            "rest": {
                "domoticItems": "/domotics/test/rest/domotic-items"
            },

            /** I18N: Rooms */
            "locations": {
                "LivingRoom": "the Living Room",
                "Kitchen": "the Kitchen",
                "Bedroom01": "Joe`s bedroom",
                "Garage": "the Garage"
            },

            /** I18N: Types */
            "types": {
                "Dimmer": "Dimmer",
                "LightSwitch": "Light Switch",
                "Curtains": "Curtains",
                "AirConditioner": "Air Conditioner"
            },

            /** Left Nav Tree */
            "tree" : [
                {
                    "text": "Rooms",
                    "href": "#location/-",
                    "nodes": [
                        {
                            "text": "Living Room",
                            "href": "#location/LivingRoom",
                        },
                        {
                            "text": "Kitchen",
                            "href": "#location/Kitchen",
                        },
                        {
                            "text": "Joe`s Bedroom",
                            "href": "#location/Bedroom01",
                        },
                        {
                            "text": "Garage",
                            "href": "#location/Garage",
                        }
                    ]
                },
                {
                    "text": "Lighting",
                    "href": "#type/-",
                    "nodes": [
                        {
                            "text": "Dimmers",
                            "href": "#type/Dimmer"
                        },
                        {
                            "text": "Light Switches",
                            "href": "#type/LightSwitch"
                        },
                        {
                            "text": "Shades",
                            "href": "#type/Shade"
                        },
                        {
                            "text": "Curtains",
                            "href": "#type/Curtains"
                        }
                    ]
                },
                {
                    "text": "Climate",
                    "href": "#type/-",
                    "nodes": [
                        {
                            "text": "Air Conditioning",
                            "href": "#type/AirConditioner"
                        },
                        {
                            "text": "Heating",
                            "href": "#type/-",
                            "nodes": [
                                {
                                    "text": "Central Heating",
                                    "href": "#type/CentralHeating"
                                },
                                {
                                    "text": "Portable Heaters",
                                    "href": "#type/PortableHeater"
                                },
                                {
                                    "text": "Fireplace",
                                    "href": "#type/Fireplace"
                                }
                            ]
                        },
                        {
                            "text": "Ventilation",
                            "href": "#type/Fan"
                        }
                    ]
                },
            ]
        }
    }
);
