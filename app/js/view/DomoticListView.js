define(['marionette','underscore', 'templates', 'view/DomoticViewMapper', 'model/filters', 'view/BaseFiltersView', 'config'],
    function(Marionette, _, templates, ViewMapper, filters, BaseFiltersView, config) {
        return Marionette.CompositeView.extend({
            initialize: function() {
                this.collection.fetch();
                this.collection.startAutoRefresh(config.autoRefreshInterval);
                this.listenTo(filters, 'change', this.render, this);
            },
            onBeforeDestroy: function() {
                this.collection.stopAutoRefresh();
            },
            template: templates['app/templates/domotic_list.hbs'],

            getChildView: function(child) {
                return ViewMapper(child.getType());
            },

            childViewContainer: '#item-list',

            collectionEvents: {
                'change:completed': 'render'
            },

            filter: function (child) {
                return filters.matches(child);
            },

            emptyView: BaseFiltersView.extend({
                template: templates['app/templates/empty_domotic_list.hbs'],
            }),
            emptyViewOptions: {
                model: filters
            }

        });
    }
);