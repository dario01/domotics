define(['marionette', 'view/NavView', 'view/DomoticListView', 'templates', 'model/DomoticCollectionModel'],
    function(Marionette, NavView, DomoticListView, templates, DomoticCollection, Dimmer, LightSwitch) {
        return new (Marionette.LayoutView.extend({
            template: templates['app/templates/main.hbs'],
            regions: {
                leftNav: '#leftNav',
                mainPanel: '#mainPanel'
            },
            onBeforeShow: function() {
                console.log('onBeforeShow mainView');
                this.leftNav.show(new NavView());
                this.mainPanel.show(
                    new DomoticListView({
                        collection: new DomoticCollection()
                    })
                );
            }
        }));
    }
);
