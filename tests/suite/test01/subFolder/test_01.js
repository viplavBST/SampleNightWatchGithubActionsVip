module.exports = {
  "Google's Search Functionality": function (browser) {
    browser
      .url("https://www.google.com")
      .setValue("input[name=q]", ["BrowserStack 01", browser.Keys.ENTER]) // this submits on desktop browsers
      .pause(1000)
      .title((result) => {
        if (!/BrowserStack 01/i.test(result.value)) {
          browser.submitForm("input[name=q]"); // this helps in mobile browsers
        }
      }).expect.title().to.match(/BrowserStack 01/i);
    browser.end();
  },
};
