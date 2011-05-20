const widgets = require("widget");
const tabs = require("tabs");
const shortening = require("shortening");
var data = require("self").data;

var widget = widgets.Widget({
  id: "gee-short-link",
  label: "Goo.gl Url Shortener",
  contentURL: data.url("google.png"),
  onClick: function() {
    //console.log("in onclick...");
    shortening.shorten(tabs.activeTab.url, function(response) {
      console.log(response.id);
    });
  }
});

// console.log("The add-on is running.");
