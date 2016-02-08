define(['backbone', 'model/subModelFactory', 'underscore'],
    function(Backbone, subModelFactory, _) {
        return Backbone.Model.extend({
            constructor: function(attributes, options) {
                Backbone.Model.call(this, attributes, _.extend({ parse: true }, options));
            },

            idAttribute: '@id',

            getId: function() {
                return this.get(this.idAttribute);
            },
            getType : function() {
                return this.get('@type');
            },
            validate: function(attrs) {
                return attrs['@type'] !== undefined ? 'type missing'
                     : attrs['@id'] !== undefined ? 'id missing'
                     : true;
            },

            subAttributes: [],
            parse: function(response, options){
                for (var i = 0; i < this.subAttributes.length; i++) {
                    var subAttr = this.subAttributes[i];
                    var data = _.extend({ '@id': response[this.idAttribute] + '/' + subAttr }, response[subAttr]);
                    var SubModel = this.subModel(subAttr);
                    response[subAttr] = new SubModel(data, {parse:true, parent: this});
                }
                return response;
            },
            subModel: subModelFactory,
            toJSON : function() {
                var json = Backbone.Model.prototype.toJSON.apply(this, arguments);
                for (var attr in json) {
                    var value = json[attr];
                    if (_.isObject(value) && 'toJSON' in value && _.isFunction(value.toJSON)) {
                        json[attr] = value.toJSON();
                    }
                }
                return json;
        }

        });
    }
);
