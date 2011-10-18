const tabs = require("tabs");
const Request  = require("request").Request;

var shorten = function(url, callback) {    
    let requestJSON = JSON.stringify({longUrl: url});
    let googlRequest = Request({
        url: 'https://www.googleapis.com/urlshortener/v1/url',
        content: requestJSON,
        contentType: 'application/json',
        onComplete: function(response) {
             callback(response.json);
        }
    });
    googlRequest.post();
}

var complectionCallback = function(json) {
    let clipboard = require("clipboard").set(json.id);
    require("notifications").notify({
        title: "URL Shortened!",
        text: json.id + " has been copied to the clipboard."
    });
};

let cm = require("context-menu");

cm.Item({
    label: "Shorten URL",
    context: cm.SelectorContext("a[href]"),
    contentScript: 'self.on("click", function (node) {' +
                 '  self.postMessage(node.href)' +
                 '});',
    onMessage: function(href) {
        shorten(href, complectionCallback);
    }
});

let shortenHotKey = require("hotkeys").Hotkey({
    combo: "accel-shift-u",
    onPress: function() {
        if (/^http[s]*:\/\//.test(tabs.activeTab.url)) {
            shorten(tabs.activeTab.url, complectionCallback);
        }
    }
});


