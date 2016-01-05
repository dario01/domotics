domotics
========

Home Automation Console based on JQuery, Backbone, Marionette application using Require.js, Bower, Grunt and LESS

# Quick start

Installing this project:

1. Clone this repository:

   git clone git@github.com:dario01/domotics.git

2. Install all dependencies defined in package.json
 
   npm install

3. Install all dependencies defined in bower.json

   bower install


# Adding a new domotic item instance

Just add an instance to the JSON-LD file at rest/test/domotic-items

# Adding a new domotic type

Sensors are read-only, so all you need to do is create a template with the same name as the domotic item type but in camel case.

For more complex scenarios, you can have a custom view or model by adding elements to 
1. app/js/view/DomoticViewMapper
2. app/js/model/DomoticModelMapper

# Thanks

Many thanks to:

http://todomvc.com/
http://blog.joanboixados.com/skeleton-for-a-backbone-marionette-application-using-require-js-bower-grunt-and-less/
https://github.com/BoilerplateMVC/Marionette-Require-Boilerplate
