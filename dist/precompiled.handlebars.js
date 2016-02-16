define(['handlebars'], function(Handlebars) {

this["JST"] = this["JST"] || {};

this["JST"]["app/templates/domotic_list.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"item-list\" class=\"row\"></div>\n";
},"useData":true});

this["JST"]["app/templates/domotic_tile_partial.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "        <img src=\""
    + container.escapeExpression(((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"image","hash":{},"data":data}) : helper)))
    + "\"/>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return "            <h4>"
    + container.escapeExpression(helpers.lookup.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.types : depth0),(depths[1] != null ? depths[1]["@type"] : depths[1]),{"name":"lookup","hash":{},"data":data}))
    + "</h4>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"tile\">\n";
  stack1 = ((helper = (helper = helpers.image || (depth0 != null ? depth0.image : depth0)) != null ? helper : alias2),(options={"name":"image","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.image) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "    <div class=\"caption\">\n";
  stack1 = ((helper = (helper = helpers.withConfig || (depth0 != null ? depth0.withConfig : depth0)) != null ? helper : alias2),(options={"name":"withConfig","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.withConfig) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        <h5>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h5>\n"
    + ((stack1 = container.invokePartial(partials["@partial-block"],depth0,{"name":"@partial-block","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </div>\n</div>\n\n";
},"usePartial":true,"useData":true,"useDepths":true});

this["JST"]["app/templates/empty_domotic_list.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"status","hash":{},"data":data}) : helper)))
    + "\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers.typeText || (depth0 != null ? depth0.typeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"typeText","hash":{},"data":data}) : helper)))
    + "\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "                device\n";
},"7":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers.locationText || (depth0 != null ? depth0.locationText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationText","hash":{},"data":data}) : helper)))
    + "\n";
},"9":function(container,depth0,helpers,partials,data) {
    return "                the House\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<div class=\"col-md-12\">\n    <div class=\"jumbotron\">\n        <h3>\n            No\n";
  stack1 = ((helper = (helper = helpers.hasStatus || (depth0 != null ? depth0.hasStatus : depth0)) != null ? helper : alias2),(options={"name":"hasStatus","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasStatus) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers.hasType || (depth0 != null ? depth0.hasType : depth0)) != null ? helper : alias2),(options={"name":"hasType","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasType) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n            was found in\n\n";
  stack1 = ((helper = (helper = helpers.hasLocation || (depth0 != null ? depth0.hasLocation : depth0)) != null ? helper : alias2),(options={"name":"hasLocation","hash":{},"fn":container.program(7, data, 0),"inverse":container.program(9, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasLocation) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </h3>\n        <p>Selected filters did not match any home automation item.</p>\n        <p>\n            <a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Clear Filters &raquo;</a>\n        </p>\n    </div>\n</div>";
},"useData":true});

this["JST"]["app/templates/item/air_conditioner.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=helpers.blockHelperMissing, buffer = 
  "    <div>\n        <div class=\"progress progress-bar-vertical\">\n            <div class=\"progress-bar\" role=\"progressbar\" aria-valuenow=\""
    + alias4(((helper = (helper = helpers.sensorTempCelcius || (depth0 != null ? depth0.sensorTempCelcius : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensorTempCelcius","hash":{},"data":data}) : helper)))
    + "\" aria-valuemin=\"0\" aria-valuemax=\"50\" style=\"height: "
    + alias4(((helper = (helper = helpers.sensorTempCelcius || (depth0 != null ? depth0.sensorTempCelcius : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensorTempCelcius","hash":{},"data":data}) : helper)))
    + "%;\">\n                <span>"
    + alias4(((helper = (helper = helpers.sensorTempCelcius || (depth0 != null ? depth0.sensorTempCelcius : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensorTempCelcius","hash":{},"data":data}) : helper)))
    + "&#x2103;</span>\n            </div>\n        </div>\n        <span><input id=\"spinner\" value=\""
    + alias4(((helper = (helper = helpers.targetTempCelcius || (depth0 != null ? depth0.targetTempCelcius : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"targetTempCelcius","hash":{},"data":data}) : helper)))
    + "\">&#x2103;</span>\n    </div>\n<p></p>\n    <div class=\"btn-group\" style=\"vertical-align: bottom\">\n        <label id=\"ON\" class=\"btn btn-sm btn-default ";
  stack1 = ((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(options={"name":"isActive","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isActive) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            ON\n        </label>\n        <label id=\"OFF\" class=\"btn btn-sm btn-default ";
  stack1 = ((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(options={"name":"isActive","hash":{},"fn":container.noop,"inverse":container.program(4, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isActive) { stack1 = alias5.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n            OFF\n        </label>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " btn-success active disabled ";
},"4":function(container,depth0,helpers,partials,data) {
    return " btn-danger active disabled ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.domoticTile,depth0,{"name":"domoticTile","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["app/templates/item/curtains.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "    <div class=\"progress\">\n        <div class=\"progress-bar\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\n             aria-valuenow=\""
    + alias4(((helper = (helper = helpers.sensorOpenPercent || (depth0 != null ? depth0.sensorOpenPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensorOpenPercent","hash":{},"data":data}) : helper)))
    + "\"\n             style=\"width: "
    + alias4(((helper = (helper = helpers.sensorOpenPercent || (depth0 != null ? depth0.sensorOpenPercent : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensorOpenPercent","hash":{},"data":data}) : helper)))
    + "%\">\n        </div>\n        <div id=\"slider\" style=\"margin-top: 4px\"></div>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.domoticTile,depth0,{"name":"domoticTile","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["app/templates/item/dimmer.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div id=\"slider\"></div>\n    <table style=\"margin: 2px\">\n        <tr>\n            <td><span class=\"glyphicon glyphicon-minus\" aria-hidden=\"true\"></span></td>\n            <td width=\"100%\"><div class=\"arrow-left\"></div></td>\n            <td><span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span></td>\n        </tr>\n    </table>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.domoticTile,depth0,{"name":"domoticTile","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["app/templates/item/light_switch.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "    <div class=\"btn-group\">\n        <label id=\"ON\" class=\"btn btn-sm btn-default ";
  stack1 = ((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(options={"name":"isActive","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isActive) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\">\n            ON\n        </label>\n        <label id=\"OFF\" class=\"btn btn-sm btn-default ";
  stack1 = ((helper = (helper = helpers.isActive || (depth0 != null ? depth0.isActive : depth0)) != null ? helper : alias2),(options={"name":"isActive","hash":{},"fn":container.noop,"inverse":container.program(4, data, 0),"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.isActive) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\">\n            OFF\n        </label>\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    return " btn-success active disabled ";
},"4":function(container,depth0,helpers,partials,data) {
    return " btn-danger active disabled ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.domoticTile,depth0,{"name":"domoticTile","fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

this["JST"]["app/templates/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<table class=\"table-responsive\">\n    <tbody>\n    <tr>\n        <td>\n            <div id=\"leftNav\">Left nav</div>\n        </td>\n        <td style=\"width: 100%\">\n            <div id=\"mainPanel\">\n                Main panel\n            </div>\n        </td>\n    </tr>\n    </tbody>\n</table>\n";
},"useData":true});

this["JST"]["app/templates/top_nav.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <li><p class=\"navbar-btn\">\n                        <a class=\"btn btn-default btn-sm\" href=\"#status/-\" role=\"button\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                            "
    + container.escapeExpression(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"status","hash":{},"data":data}) : helper)))
    + "\n                        </a>\n                    </p></li>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <li><p class=\"navbar-btn\">\n                        <a class=\"btn btn-default btn-sm\" href=\"#type/-\" role=\"button\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                            "
    + container.escapeExpression(((helper = (helper = helpers.typeText || (depth0 != null ? depth0.typeText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"typeText","hash":{},"data":data}) : helper)))
    + "\n                        </a>\n                    </p></li>\n";
},"5":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                    <li><p class=\"navbar-btn\">\n                        <a class=\"btn btn-default btn-sm\" href=\"#location/-\" role=\"button\">\n                            <span class=\"glyphicon glyphicon-remove\"></span>\n                            In "
    + container.escapeExpression(((helper = (helper = helpers.locationText || (depth0 != null ? depth0.locationText : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"locationText","hash":{},"data":data}) : helper)))
    + "\n                        </a>\n                    </p></li>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " style=\"display: none\" ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=helpers.blockHelperMissing, buffer = 
  "<nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Home Automation</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <ul class=\"nav navbar-nav\">\n";
  stack1 = ((helper = (helper = helpers.hasStatus || (depth0 != null ? depth0.hasStatus : depth0)) != null ? helper : alias2),(options={"name":"hasStatus","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasStatus) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers.hasType || (depth0 != null ? depth0.hasType : depth0)) != null ? helper : alias2),(options={"name":"hasType","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasType) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = ((helper = (helper = helpers.hasLocation || (depth0 != null ? depth0.hasLocation : depth0)) != null ? helper : alias2),(options={"name":"hasLocation","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasLocation) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  buffer += "            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li id=\"status-dropdown\" ";
  stack1 = ((helper = (helper = helpers.hasStatus || (depth0 != null ? depth0.hasStatus : depth0)) != null ? helper : alias2),(options={"name":"hasStatus","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data}),(typeof helper === alias3 ? helper.call(alias1,options) : helper));
  if (!helpers.hasStatus) { stack1 = alias4.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n                    data-toggle=\"tooltip\" data-placement=\"left\" title=\"Set active/inactive filter\">\n                    <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">Status <span class=\"caret\"></span></a>\n                    <ul class=\"dropdown-menu\">\n                        <li><a href=\"#status/active\">Active</a></li>\n                        <li><a href=\"#status/inactive\">Inactive</a></li>\n                    </ul>\n                </li>\n\n                <li class=\"active\"><a href=\"#\">Dashboard</a></li>\n                <li class=\"disabled\"><a href=\"#\">Admin</a></li>\n                <li class=\"disabled\"><a href=\"#\">About</a></li>\n            </ul>\n        </div>\n    </div>\n</nav>";
},"useData":true});

this["JST"]["app/templates/tree.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div id=\"tree\">tree</div>";
},"useData":true});

return this["JST"];

});