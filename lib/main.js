const widgets = require("widget");
const tabs = require("tabs");
const shortening = require("shortening");

var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: "http://www.mozilla.org/favicon.ico",
  onClick: function() {
    // tabs.open("http://www.mozilla.org/");
    var url = 'http://www.mozilla.org/';
    //console.log("in onclick...");
    shortening.shorten(url, function(raw) {
      console.log(raw);
      var parsed = JSON.parse(raw);
      console.log(parsed.id);
    });
  }
});

// console.log("The add-on is running.");
