var browserstack = require('browserstack-local');
var bs_local;

module.exports = {
  beforeEach : function(browser, done) {
    console.log("Connecting local");
    bs_local = new browserstack.Local();
    bs_local.start({'key': browser.options.desiredCapabilities['browserstack.key'] }, function(error) {
      if (error) return done(error);

      console.log('Connected. Now testing...');
      done();
    });
  },

  afterEach : function(browser, done) {
    bs_local.stop(done);
  }
}
