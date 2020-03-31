
var Home = function(){
    this.loginButton = element(by.css('.buttonText_3rKb1'));
    this.userField = element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div/div[2]/div[3]/form/input[1]'));
    this.passwordField =  element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div/div[2]/div[3]/form/input[2]'));
    this.submitButton = element(by.css('.submitButton_hwoFX'));
    this.forBusinessButton = element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div[1]/div/div[2]/div/div[2]/div[1]'));
    this.hackathonButton = element(by.xpath('//*[@id=\"__next\"]/div/div[1]/div[1]/div/div[2]/div/div[2]/div[2]/a[2]/div/p[1]'));
    this.developerAssessments = element(by.css('.subMenuTitle_2ahHG'));

    this.userLogin = function(username, pass){
        this.userField.sendKeys(username);
        this.passwordField.sendKeys(pass);
        this.submitButton.click();
    };


    this.goToHackathons = function(){
        browser.actions().mouseMove(this.forBusinessButton)
        .mouseMove(this.hackathonButton).click().perform();
    }

    this.goToDeveloperAssessements = function(){
        browser.actions().mouseMove(this.forBusinessButton)
        .mouseMove(this.developerAssessments).click().perform();
    }
}

module.exports = new Home();