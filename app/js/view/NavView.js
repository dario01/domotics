define(['marionette', 'templates','config', 'bootstrap-treeview'],
    function(Marionette, templates, config) {
        return Marionette.ItemView.extend({
            template: templates['app/templates/tree.hbs'],

            ui: {
                tree: '#tree'
            },

            events: {
                'nodeSelected @ui.tree': 'onTreeChange'
            },

            onTreeChange: function( event ) {
                console.log("onTreeChange");
            },

            onRender: function() {
                this.ui.tree.treeview({
                    enableLinks: true,
                    data: config.tree
                });
            }
        });
    }
);
