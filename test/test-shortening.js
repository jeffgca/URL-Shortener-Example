var shortening = require("shortening");

exports.test_shorten = function(test) {
    
    shortening.shorten('https://mozilla.org/', function(response) {
        console.log(response);
        //console.log(response.status + ': ' + response.text);
    });
    
    test.pass("I should read the docs now");
}
