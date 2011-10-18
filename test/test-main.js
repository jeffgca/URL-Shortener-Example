var shortener = require("main");
var testRunner, remaininTests;

exports.test_shorten = function(test) {
    testRunner = test;
    testRunner.waitUntilDone(2000);
    shortener.shorten('https://www.mozilla.org/', function(response) {
        console.log('url is: ' + response.id);
        testRunner.assertEqual(/^http:\/\/goo.gl\/[\w]{5}/.test(response.id), true);
        testRunner.done();
    });
}
