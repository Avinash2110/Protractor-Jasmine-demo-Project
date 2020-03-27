var home = require('../pages/Home');

describe('Login to flipkart', function(){

    var url = 'https://www.hackerearth.com/';
    var userName = 'avinashshukla0784@gmail.com';
    var password = 'Avinash@1997';

    it('Navigate to home', function(){
        browser.waitForAngularEnabled(false);

        browser.driver.get(url);
    
        home.loginButton.click();
        browser.sleep(10000);

        home.setUserName(userName);

        home.setPassword(password);

        home.clickSubmit();



    });

});