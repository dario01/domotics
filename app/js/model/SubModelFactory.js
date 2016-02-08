define(['backbone', 'util/memoize'],
    function(Backbone, memoize) {
        return memoize(
            function(attribute) {
                return Backbone.Model.extend({
                    attribute: attribute,
                    idAttribute: '@id',

                    initialize: function(attributes, options) {
                        this.parent = options.parent;
                    },

                    url: function() {
                        return this.parent.url() + '/' + this.attribute;
                    }
                });
            }
        );
    }
);
