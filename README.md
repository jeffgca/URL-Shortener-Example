##goo.gl Url Shortener add-on

_Abstract: basically, re-implement the [chrome addon](https://chrome.google.com/webstore/detail/iblijlcdoidgdpfknkckljiocdbnlagk?hl=en-US)_

Spec for this addon:

* Addons bar button
* goo.gl Url shortener service implementation + tests
* UI pop-up that displays the shortened url

####Notes

* DONE:
    * POST problems, the goo.gl url shortener API seems to want a RAW json post, which Request in jetpack currently doesn't do? Should look at the code. DONE
    * get current doc location to feed to shortener DONE
    * copy url to buffer DONE
    * key binding: ( cmd+shift+u ) DONE
    * notifications implementation DONE
    * Bug: XPI install doesn't work, no errors. FIXED (?) ( Gremlins, it just started working... )
* TODO:
    * Small window to display shortened url IN PROGRESS
    * Bug: pop-up content doesn't work (?) probably doing something wrong, need to actually read the docs.
    * research: can we determine if notifications backends are installed?

####Resources:

* [goo.gl api docs](http://code.google.com/apis/urlshortener/overview.html)
