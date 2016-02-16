"use strict";

define(['backbone','model/DomoticModelMapper', 'config'],
    function(Backbone, DomoticModelMapper, config) {
        return Backbone.Collection.extend({
            url: config.rest.domoticItems,

            model: function (attrs, options) {
                return new (DomoticModelMapper(attrs['@type']))(attrs, options);
            },

            //localStorage: new Backbone.LocalStorage('domotic-items'),

            comparator: 'name',

            startAutoRefresh: function(interval) {
                var self = this;
                this.autoRefreshID = setInterval(function() {
                    self.fetch();
                }, interval);
            },
            stopAutoRefresh: function() {
                clearInterval(this.autoRefreshID);
            }

        });
    }
);
