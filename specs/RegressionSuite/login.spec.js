var home = require('../../pages/Home');
var profile = require('../../pages/Profile');

describe('Login to flipkart', function(){

    var url = 'https://www.hackerearth.com/';
    var userName = 'avinashshukla0784@gmail.com';
    var password = 'Avinash@1997';

    it('Navigate to home', function(){
        browser.get(url);
        home.loginButton.click();
        browser.sleep(4000);

        home.userLogin(userName, password);

        browser.sleep(2000);

        profile.goToProfile();

        browser.sleep(2000);

        expect(profile.getProfileName()).toEqual('Avinash Kumar Shukla');

        console.log('Login is verified');

        profile.logout();




    });

});