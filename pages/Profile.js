
var Profile = function(){
    this.profileButton = element(by.css('.track-header-profile-box'));
    this.profileName = element(by.css('.name'));
    this.dropDown = element(by.xpath('//*[@id=\"hacker-dd-icon\"]/a/div/i'));
    this.logoutButton = element(by.xpath('//*[@id=\"hacker-box\"]/ul/a[10]/li'));

    this.goToProfile = function(){
        this.profileButton.click();
    };

    this.getProfileName = function(){
        return this.profileName.getText();
    }

    this.logout = function(){
        this.dropDown.click();
        this.logoutButton.click();
    }
};

module.exports = new Profile();