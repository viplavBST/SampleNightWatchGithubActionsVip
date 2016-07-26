var browserstack = require('browserstack-local');
var bs_local;

module.exports = {
  // Code to start browserstack local before start of test
  beforeEach : function(browser, done) {
    console.log("Connecting local");
    bs_local = new browserstack.Local();
    bs_local.start({'key': browser.options.desiredCapabilities['browserstack.key'] }, function(error) {
      if (error) return done(error);

      console.log('Connected. Now testing...');
      done();
    });
  },

  // Code to stop browserstack local after end of test
  afterEach : function(browser, done) {
    bs_local.stop(done);
  }
}
