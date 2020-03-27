require('protractor')
var Home = function(){
    this.loginButton = element(by.css('.buttonText_3rKb1'));
    this.userField = element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div/div[2]/div[3]/form/input[1]'));
    this.passwordField =  element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div/div[2]/div[3]/form/input[2]'));
    this.submitButton = element(by.css('.submitButton_hwoFX'));

    this.setUserName = function(user){
        this.userField.sendKeys(user);
        
    };

    this.setPassword = function(pass){
        this.passwordField.sendKeys(pass);
    };

    this.clickSubmit = function(){
        this.submitButton.click();
    };
}

module.exports = new Home();