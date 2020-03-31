exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['./specs/login.spec.js'],

    suites: {
        Regression: './specs/RegressionSuite/*.js'
    },

    onPrepare: function(){
        browser.waitForAngularEnabled(false);

        browser.driver.manage().window().maximize();
        browser.driver.get('https://www.hackerearth.com/');
    },

    onComplete: function(){
        browser.close();
    },

    afterLaunch: function(){
        browser.quit();
    }


}