const widgets = require("widget");
const tabs = require("tabs");
const shortening = require("shortening");
const data = require("self").data;
const { Hotkey } = require("hotkeys");
const notifications = require("notifications");


var panel = require("panel").Panel({
  width: 240,
  height: 320,
  contentURL: data.url("foo.html"),
  contentScriptFile: [data.url("jquery-1.4.4.min.js"),
                      data.url("panel.js")]
});

var widget = widgets.Widget({
  id: "gee-short-link",
  label: "Goo.gl Url Shortener",
  contentURL: data.url("google.png"),
  panel: panel,
  onClick: function() {
    if (/http:\/\//.test(tabs.activeTab.url)) {
      shortening.shorten(tabs.activeTab.url, function(response) {
        panel.port.emit("alert", response);
      });
    } else {
      console.log('not a valid web url: ' + tabs.activeTab.url);
    }
  }
});

var shortenHotKey = Hotkey({
  combo: "accel-shift-u",
  onPress: function() {
    if (/^http[s]*:\/\//.test(tabs.activeTab.url)) {
      shortening.shorten(tabs.activeTab.url, function(response) {
        let clipboard = require("clipboard");
        clipboard.set(response.id)
        notifications.notify({
          title: "Copied url: " + response.id + " to the clipboard.",
          text: "Click this notification to test the new Url.",
          data: response.id,
          iconUrl: data.url("google.png"),
          onClick: function(url) {
            tabs.open(url);
          }
        });
      });
    } else {
      notifications.notify({
        title: "Url error!",
        text: "The url " + tabs.activeTab.url + " doesn't seem to be a valid web url.",
        iconUrl: data.url("google.png")
      });
    }
  }
});


