define(['marionette', 'view/mainView'],
    function(Marionette, mainView) {
        return new (Marionette.LayoutView.extend({
            el: 'body',
            template: false,

            regions: {
                header: 'header',
                main: '#main',
                footer: 'footer'
            },

            onBeforeRender: function() {
                console.log('onBeforeRender rootView');

                //this.header.show(new HeaderView());
                this.main.show(mainView);
                //this.footer.show(new FooterView());
            }
        }));
    }
);

