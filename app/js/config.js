define([],
    function() {
        return {
            "rest": {
                "domoticItems": "/domotics/rest/test/domotic-items"
            },
            "locations": {
                "LivingRoom": "Living Room",
                "Kitchen": "Kitchen",
                "Bedroom01": "Joe's bedroom"
            },
            "tree" : [
                {
                    text: 'Rooms',
                    href: '#location/-',
                    tags: ['4'],
                    nodes: [
                        {
                            text: 'Kitchen',
                            href: '#location/Kitchen',
                            tags: ['0']
                        },
                        {
                            text: "Joe's Bedroom",
                            href: '#location/Bedroom01',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: 'Lightning',
                    href: '#type/-',
                    tags: ['2'],
                    nodes: [
                        {
                            text: 'Dimmers',
                            href: '#type/Dimmer',
                            tags: ['0']
                        },
                        {
                            text: "Light Switches",
                            href: '#type/LightSwitch',
                            tags: ['0']
                        }
                    ]
                },
                {
                    text: 'Parent 3',
                    href: '#parent3',
                    tags: ['0']
                },
                {
                    text: 'Parent 4',
                    href: '#parent4',
                    tags: ['0']
                },
                {
                    text: 'Parent 5',
                    href: '#parent5'  ,
                    tags: ['0']
                }
            ]
        }
    }
);
