Domotics
========

Home Automation Console based on JQuery, Backbone, Marionette application using Require.js, Bower, Grunt and LESS

# Quick start

Installing this project:

1. Clone this repository:
   `git clone git@github.com:dario01/domotics.git`

2. Install all [npm](https://www.npmjs.com) dependencies defined in package.json: 
   `npm install`

3. Install all [Bower](http://bower.io) dependencies defined in bower.json: 
   `bower install`

## Compile and watch files
   `grunt`
   
## Test and watch files
   `karma start test/js/karma.conf.js`

## Generate JsDocs
   `grunt jsdoc`

# The Web Application can be accessed at 
   `app/index.html`

# Adding new domotics
Upd
## Adding a new domotic item instance

Just add an instance to the JSON-LD file at `rest/test/domotic-items`

# Adding a new domotic type

Sensors are read-only, so all you need to do is create a template under `app/templates/item` with the same name as the domotic item type (but in camel case).

For more complex scenarios, you can have a custom view or model by adding elements to:

* `app/js/view/DomoticViewMapper`

* `app/js/model/DomoticModelMapper`

See respective examples under:

* `app/js/view/item`

* `app/js/model/item`

# Thanks

Many thanks to:

* <http://todomvc.com/>
* <http://blog.joanboixados.com/skeleton-for-a-backbone-marionette-application-using-require-js-bower-grunt-and-less/>
* <https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate>
* <http://karma-runner.github.io/0.13/plus/requirejs.html>
* <https://github.com/kjbekkelund/karma-requirejs>
* <https://github.com/jonmiles/bootstrap-treeview>