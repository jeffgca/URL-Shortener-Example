const Request = require("request").Request;
var xhr = require("xhr");

exports.shorten = function(longUrl, callback) {
    
    var json = JSON.stringify({longUrl: longUrl});
    //console.log(json);
    //
    //var googlRequest = Request({
    //   url: 'https://www.googleapis.com/urlshortener/v1/url',
    //   content: json,
    //   contentType: 'application/json',
    //   onComplete: function(response) {
    //        console.log("in complete handler");
    //        console.log(typeof(response));
    //        callback(response);
    //   }
    //});
    //
    //googlRequest.get();
    
    
    // poached from another goo.gl extension
    var request = new xhr.XMLHttpRequest();
    
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        //var response = JSON.parse(request.responseText);
        callback(request.responseText);
      }
    }
    
    request.open("POST", "https://www.googleapis.com/urlshortener/v1/url");
    request.setRequestHeader("Content-type", "application/json");
    request.send(json);
}