var browserstack = require('browserstack-local');
var bs_local;

module.exports = {
  before : function(done) {
    console.log("Connecting local");
    bs_local = new browserstack.Local();
    bs_local.start({'key': browser.options.desiredCapabilities['browserstack.key'] }, function(error) {
      if (error) return done(error);

      console.log('Connected. Now testing...');
      done();
    });
  },

  after : function(done) {
    bs_local.stop(done);
  }
}
