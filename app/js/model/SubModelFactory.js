define(['backbone'],
    function(Backbone) {
        return function(attribute) {
            return Backbone.Model.extend({
                attribute: attribute,

                initialize: function(attributes, options) {
                    this.parent = options.parent;
                },

                url: function() {
                    return this.parent.url() + '/' + this.attribute;
                }
            });
        }
    }
);
