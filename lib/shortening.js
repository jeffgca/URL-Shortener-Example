const Request = require("request").Request;

exports.shorten = function(longUrl, callback) {
    
    var json = JSON.stringify({longUrl: longUrl});
    
    var googlRequest = Request({
       url: 'https://www.googleapis.com/urlshortener/v1/url',
       content: json,
       contentType: 'application/json',
       onComplete: function(response) {
            callback(response.json);
       }
    });
    
    googlRequest.post();
}