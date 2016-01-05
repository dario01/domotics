define(['marionette','underscore', 'templates', 'view/DomoticViewMapper', 'model/filters'],
    function(Marionette, _, templates, viewMapper, filters) {
        return Marionette.CompositeView.extend({
            template: templates['app/templates/domotic_list.hbs'],

            getChildView: function(child) {
                return viewMapper(child.getType());
            },

            childViewContainer: '#item-list',

            ui: {
                toggle: '#toggle-all'
            },

            events: {
                'click @ui.toggle': 'onToggleAllClick'
            },

            collectionEvents: {
                'change:completed': 'render'
            },

            initialize: function () {
                this.listenTo(filters, 'change', this.render, this);
            },

            filter: function (child) {
                return filters.matches(child);
            },

            onToggleAllClick: function (e) {
                var isChecked = e.currentTarget.checked;


            }
        });
    }
);