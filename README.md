BrowserStack-nightwatch
=========

Sample for using nightwatch with BrowserStack Automate.

###Install nightwatch.js
*Starting and prerequisite: [nightwatch]*
- `npm install -g nightwatch`

###Configuring the json
 - Open `settings.json`
 - Add `browserstack.user` and `browserstack.key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]
 - Add / customise more [capabilities] to `desiredCapabilities` in `settings.json`

###Sample test
 - Path: `tests/google/googleTest.js`
 - To start a single test run: `nightwatch -c ./single_test_settings.json`
 - To start parallel tests run: `nightwatch -c parallel_test_settings.json -e browserstack_firefox,browserstack_chrome,browserstack_safari,browserstack_ie`

[nightwatch]:http://nightwatchjs.org/guide
[capabilities]:http://www.browserstack.com/automate/capabilities
[dashboard]:https://www.browserstack.com/automate
