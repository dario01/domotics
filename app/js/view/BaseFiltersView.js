define(['marionette', 'model/filters', 'config'],
    function(Marionette, filters, config) {
        return Marionette.ItemView.extend({
            model: filters,

            templateHelpers: {
                hasStatus: function () {
                    return '-' != this.status;
                },
                hasLocation: function () {
                    return '-' != this.location;
                },
                hasType: function () {
                    return '-' != this.type;
                },
                locationText: function() {
                    return config.locations[this.location] || this.location;
                },
                typeText: function() {
                    return config.types[this.type] || this.type;
                }
            }

        });
    }
);
