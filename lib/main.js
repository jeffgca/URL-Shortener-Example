const tabs = require("tabs");
const Request  = require("request").Request;

/**
 * shorten - shorten the url
 * @param {String} url: the url to shorten
 * @param {Function} callback to call once the shortening operation is complete
 */
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

/* so we can test the request */
exports.shorten = shorten;

/**
 * completionCallback: copy the shortened url to the clipboard and display a notification.
 * @param {Object} json the json returned by the shortener service.
 */
var completionCallback = function(json) {
    let clipboard = require("clipboard").set(json.id);
    require("notifications").notify({
        title: "URL Shortened!",
        text: json.id + " has been copied to the clipboard."
    });
};

/**
 * Create the context-menu item.
 */
let cm = require("context-menu");
cm.Item({
    label: "Shorten URL",
    /* only display for links */
    context: cm.SelectorContext("a[href]"),
    /* the content script */
    contentScript: 'self.on("click", function (node) {' +
                 '  self.postMessage(node.href)' +
                 '});',
    /* handle the postMessage from the content script */
    onMessage: function(href) {
        shorten(href, completionCallback);
    }
});

/**
 * Create the key binding.
 */
let shortenHotKey = require("hotkeys").Hotkey({
    combo: "accel-shift-u",
    onPress: function() {
        if (/^http[s]*:\/\//.test(tabs.activeTab.url)) {
            shorten(tabs.activeTab.url, completionCallback);
        }
    }
});
