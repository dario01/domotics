define(['backbone', 'handlebars'],
    function(Backbone, Handlebars) {
        return new (Backbone.Model.extend({
            urlTemplate: Handlebars.compile("status/{{status}}/location/{{location}}/type/{{type}}"),
            urlRegEx: /status\/(-|\w+)\/location\/(-|\w+)\/type\/(-|\w+)\/?/,
            defaults: {
                status: '-',
                location: '-',
                type: '-'
            },
            resetFilters: function() {
                this.set(this.defaults);
            },
            setFilters: function(status, location, type) {
                this.set({
                    status: status,
                    location: location,
                    type: type
                })
            },
            toURL: function() {
                return this.urlTemplate(this.toJSON());
            },
            matches: function(domoticItem) {
                return (this.get('status') === '-'    || this.shouldFilterActive() === domoticItem.isActive())
                    && (this.get('location') === '-'  || this.get('location') === domoticItem.get('location'))
                    && (this.get('type') === '-'      || this.get('type') === domoticItem.getType());
            },
            shouldFilterActive : function() {
                return this.get('status') === 'active';
            }
        }));
    }
);
