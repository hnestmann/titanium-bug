var Alloy = require('/alloy'),
Backbone = Alloy.Backbone,
_ = Alloy._;




function __processArg(obj, key) {
  var arg = null;
  if (obj) {
    arg = obj[key] || null;
  }
  return arg;
}

function Controller() {

  require('/alloy/controllers/' + 'BaseController').apply(this, Array.prototype.slice.call(arguments));
  this.__controllerPath = 'index';
  this.args = arguments[0] || {};

  if (arguments[0]) {
    var __parentSymbol = __processArg(arguments[0], '__parentSymbol');
    var $model = __processArg(arguments[0], '$model');
    var __itemTemplate = __processArg(arguments[0], '__itemTemplate');
  }
  var $ = this;
  var exports = {};
  var __defers = {};

  // Generated code that must be executed before all UI and/or
  // controller code. One example is all model and collection
  // declarations from markup.


  // Generated UI code
  $.__views.index = Ti.UI.createWindow(
  { backgroundColor: "white", layout: "vertical", id: "index" });

  $.__views.index && $.addTopLevelView($.__views.index);
  $.__views.webview = Ti.UI.createWebView(
  { height: "50%", id: "webview", willHandleTouches: false, url: "https://hnestmann-inside-eu01-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/CookieCheck-Set" });

  $.__views.index.add($.__views.webview);
  $.__views.webview2 = Ti.UI.createWebView(
  { height: "50%", id: "webview2", willHandleTouches: false });

  $.__views.index.add($.__views.webview2);
  exports.destroy = function () {};

  // make all IDed elements in $.__views available right on the $ in a
  // controller's internal code. Externally the IDed elements will
  // be accessed with getView().
  _.extend($, $.__views);

  // Controller code directly from the developer's controller file
  function doClick(e) {
    alert($.label.text);
  }
  var secondLoad = false;
  $.webview.addEventListener('load', function (e) {
    $.webview2.url = "https://hnestmann-inside-eu01-dw.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/CookieCheck-Check";
    $.webview2.reload();

  });

  $.index.open();

  // Generated code that must be executed after all UI and
  // controller code. One example deferred event handlers whose
  // functions are not defined until after the controller code
  // is executed.


  // Extend the $ instance with all functions and properties
  // defined on the exports object.
  _.extend($, exports);
}

module.exports = Controller;
//# sourceMappingURL=file:///Users/hnestmann/CommerceCloud/corporate/playground/SampleProject/build/map/Resources/iphone/alloy/controllers/index.js.map