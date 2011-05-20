##goo.gl Url Shortener add-on

_Abstract: basically, re-implement the [chrome addon](https://chrome.google.com/webstore/detail/iblijlcdoidgdpfknkckljiocdbnlagk?hl=en-US)_

Spec for this addon:

* Addons bar button
* goo.gl Url shortener service implementation + tests
* UI pop-up that displays the shortened url

####Notes

* POST problems, the goo.gl url shortener API seems to want a RAW json post, which Request in jetpack currently doesn't do? Should look at the code. **DONE, WORKS**
* ToDos:
    * get current doc location to feed to shortener
    * small window to display shortened url
    * copy url to buffer
    * key bindings??



####Resources:

* [goo.gl api docs](http://code.google.com/apis/urlshortener/overview.html)
