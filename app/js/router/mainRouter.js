define(['marionette','model/filters'],
    function(Marionette, filters) {
        return Marionette.AppRouter.extend({
            routes: {
                "": "index",
                "status/:status": function(status) { filters.set({status: status}); },
                "location/:location": function(location) { filters.set({location: location}); },
                "type/:type": function(type) { filters.set({type: type}); },
            },

            initialize: function() {
                this.route(filters.urlRegEx, 'applyFilters')
                this.listenTo(filters, 'change', this.canonical, this);
            },

            index: function() {
                filters.resetFilters();
            },

            applyFilters: function(status, location, type) {
                filters.setFilters(status, location, type);
            },

            canonical: function() {
                this.navigate(filters.toURL());
            }

        });
    }
);