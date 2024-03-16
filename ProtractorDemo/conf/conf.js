// An example configuration file.
exports.config = {
  directConnect: true,

  SELENIUM_PROMISE_MANAGER: false,


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  //specs: ['C:/Users/sarath/Desktop/HopiceProjec/spec/flow.js'],
  //specs: ['customConfig.js','../spec/flow.js'],
  specs: ['../spec/flow.js'],
  

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 1999000000,
  }
};

