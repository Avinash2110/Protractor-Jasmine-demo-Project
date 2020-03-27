exports.config = {
    directConnect: true,

    capabilities: {
        'browserName': 'chrome'
    },

    framework: 'jasmine',

    specs: ['./specs/login.spec.js'],


}