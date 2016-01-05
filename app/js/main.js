require.config({
    paths: {
        'jquery': 'lib/jquery/dist/jquery',
        'jquery-ui': 'lib/jquery-ui/ui',
        'jquery-mockjax': 'lib/jquery-mockjax/dist/jquery.mockjax',
        'Q': 'lib/q/q',
        'bootstrap': 'lib/bootstrap/dist/js/bootstrap',
        'bootstrap-treeview': 'lib/bootstrap-treeview/dist/bootstrap-treeview.min',
        'underscore': 'lib/underscore/underscore',
        'handlebars': 'lib/handlebars/handlebars',
        'templates': '../../dist/precompiled.handlebars',
        'backbone': 'lib/backbone/backbone',
        'marionette': 'lib/marionette/lib/backbone.marionette',
    },
    shim: {
        underscore: {
            exports: '_'
        },
        'jquery-mockjax': {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        },
        'bootstrap-treeview': {
            deps: ['jquery', 'bootstrap']
        }
    },
    deps: ['jquery', 'underscore', 'bootstrap', 'jquery-mockjax', 'Q']
});

require(['jquery','app','handlebars', 'templates', 'underscore','config'],
    function($, app, Handlebars, templates, _, config) {
        console.log('System entry point');

        configureHandlebars(Handlebars, templates, config);
        configureUnderscore(_, config);

        $(function(){ app.start(); });
    }
);

function configureHandlebars(Handlebars, templates, config) {
    console.log('Configuring Handlebars');

    Handlebars.registerPartial('domoticTile', templates['app/templates/domotic_tile_partial.hbs']);

    Handlebars.registerHelper('withConfig', function(options) {
        return options.fn(config);
    });
}

function configureUnderscore(_, config) {
    console.log('Configuring Underscore');

    _.mixin({
        camel2Underscore: function(string){
            return string.replace(/([^A-Z])([A-Z])/g,'$1_$2').toLowerCase();
        }
    });
}

var defaultData = [
    {
        text: 'Parent 1',
        href: '#parent1',
        tags: ['4'],
        nodes: [
            {
                text: 'Child 1',
                href: '#child1',
                tags: ['2'],
                nodes: [
                    {
                        text: 'Grandchild 1',
                        href: '#grandchild1',
                        tags: ['0']
                    },
                    {
                        text: 'Grandchild 2',
                        href: '#grandchild2',
                        tags: ['0']
                    }
                ]
            },
            {
                text: 'Child 2',
                href: '#child2',
                tags: ['0']
            }
        ]
    },
    {
        text: 'Parent 2',
        href: '#parent2',
        tags: ['0']
    },
    {
        text: 'Parent 3',
        href: '#parent3',
        tags: ['0']
    },
    {
        text: 'Parent 4',
        href: '#parent4',
        tags: ['0']
    },
    {
        text: 'Parent 5',
        href: '#parent5'  ,
        tags: ['0']
    }
];

require(['jquery','bootstrap-treeview'], function($, treeview) {

        $('#leftNav').treeview({
            data: defaultData
        });

        $('#leftNav').on('nodeSelected', function(event, data) {
            console.log(data.text);
        });
    }
);
