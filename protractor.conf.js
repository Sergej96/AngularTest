// An example configuration file
exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
      var AllureReporter = require('jasmine-allure-reporter');
      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
      }));
      jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
              allure.createAttachment('Screenshot', function () {
                  return new Buffer(png, 'base64')
              }, 'image/png')();
              done();
          })
      });
  },

  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.
  specs: ['./spec/spec.js'],

    SELENIUM_PROMISE_MANAGER: false,
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};