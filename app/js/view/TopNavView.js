define(['view/BaseFiltersView', 'templates'],
    function(BaseFiltersView, templates) {
        return BaseFiltersView.extend({
            template: templates['app/templates/top_nav.hbs'],

            modelEvents: {
                'change': 'render'
            },

            ui: {
                search: '#search',
                statusDropdown: '#status-dropdown'
            },

            events: {
                'change @ui.search': 'onSearch'
            },

            onSearch: function( event ) {
                console.log("onSearch");
            },

            onRender: function() {
                this.ui.statusDropdown.tooltip();
            }
        });
    }
);
