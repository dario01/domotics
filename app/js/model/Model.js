define(['backbone', 'model/SubModelFactory'],
    function(Backbone, SubModelFactory) {
        return Backbone.Model.extend({
            idAttribute: '@id',

            getType: function() {
                return this.get('@type');
            },

            subAttributes: [],
            parse: function(response, options){
                var subAttr;
                for (var i = 0; i < this.subAttributes.length; i++) {
                    subAttr = this.subAttributes[i];
                    var data = _.extend(response[subAttr], { id: response[this.idAttribute] + '/' + subAttr });
                    var SubModel = this.subModel(subAttr);
                    response[subAttr] = new SubModel(data, {parse:true, parent: this});
                }
                return response;
            },
            subModels: {},
            subModel: function(subAttribute) {
                return this.subModels[subAttribute] = this.subModels[subAttribute] || SubModelFactory(subAttribute) ;
            }
        });
    }
);
