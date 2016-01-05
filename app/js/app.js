define(['backbone','marionette','view/rootView','router/mainRouter'],
    function(Backbone, Marionette, rootView, mainRouter) {
        return new (Marionette.Application.extend({
            rootView: rootView,
            mainRouter: mainRouter,

            onStart: function() {
                console.log('starting app');
                Backbone.history.start();
                this.rootView.render();
                rootView.main.currentView.mainPanel.currentView.collection.fetch();
            }
        }));
    }
);
