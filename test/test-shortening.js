var shortening = require("shortening");
var testRunner, remaininTests;

/**
    info: {
     "kind": "urlshortener#url",
     "id": "http://goo.gl/aI6x",
     "longUrl": "https://www.mozilla.org/"
    }   
*/
exports.test_shorten = function(test) {
    testRunner = test;
    testRunner.waitUntilDone(2000);
    shortening.shorten('https://www.mozilla.org/', function(response) {
        testRunner.assertEqual(/^http:\/\/goo.gl\/[\w]{5}/.test(response.id), true);
        testRunner.done();
    });
}
