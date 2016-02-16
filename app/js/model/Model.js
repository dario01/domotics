"use strict";

define(['backbone','underscore'],
    function(Backbone, _) {
        return Backbone.Model.extend({
            idAttribute: '@id',

            getType : function() {
                return this.get('@type');
            },
            validate: function(attrs) {
                return attrs['@type'] == undefined ? 'type missing'
                     : attrs['@id'] == undefined ? 'id missing'
                     : undefined;
            },
            saveChangesOnly: function() {
                var attrs = _.clone(this.changedAttributes());
                attrs[this.idAttribute] = this.id;
                return this.save( attrs, { patch: true } );
            }
        });
    }
);
