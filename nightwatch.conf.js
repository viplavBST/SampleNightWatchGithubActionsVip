nightwatch_config = {
  src_folders : [ "tests/" ],

  selenium : {
    "start_process" : false,
    "host" : "hub.browserstack.com",
    "port" : 80
  },

  test_settings: {
    default: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Sample tests for Nightwatch",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
        "browserstack.debug": true
      }
    },
    chrome_48: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Sample tests for Nightwatch",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
        "browserstack.debug": true,

        browser: "chrome",
        browser_verion: "48",
        os: "Windows",
        os_version: "10"
      }
    },
    firefox_45: {
      selenium_host  : "hub.browserstack.com",
      selenium_port  : 80,
      silent: true,
      desiredCapabilities: {
        build: "Sample tests for Nightwatch",
        "browserstack.user": process.env.BROWSERSTACK_USERNAME,
        "browserstack.key": process.env.BROWSERSTACK_ACCESS_KEY,
        "browserstack.debug": true,

        browser: "firefox",
        browser_verion: "45",
        os: "OS X",
        os_version: "El Capitan"
      }
    }
  }
};

module.exports = nightwatch_config;
