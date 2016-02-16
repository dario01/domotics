"use strict";

define(['marionette', 'view/LeftNavView', 'view/DomoticListView', 'templates', 'model/DomoticCollectionModel'],
    function(Marionette, LeftNavView, DomoticListView, templates, DomoticCollection, Dimmer, LightSwitch) {
        return Marionette.LayoutView.extend({
            template: templates['app/templates/main.hbs'],
            regions: {
                leftNav: '#leftNav',
                mainPanel: '#mainPanel'
            },
            onBeforeShow: function() {
                console.log('onBeforeShow mainView');
                this.leftNav.show(new LeftNavView());
                this.mainPanel.show(
                    new DomoticListView({
                        collection: new DomoticCollection()
                    })
                );
            }
        });
    }
);
