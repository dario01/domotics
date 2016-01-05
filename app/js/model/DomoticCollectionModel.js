define(['backbone','model/DomoticModelMapper', 'config'],
    function(Backbone, DomoticModelMapper, config) {
        return Backbone.Collection.extend({
            url: config.rest.domoticItems,
            model: function (attrs, options) {
                return new (DomoticModelMapper(attrs['@type']))(attrs, options);
            },

            //localStorage: new Backbone.LocalStorage('domotic-items'),

            comparator: 'name',

            getActiveItems: function () {
                return this.filter(this._isActive);
            },

            _isActive: function (item) {
                return item.isActive();
            }
        });
    }
);
