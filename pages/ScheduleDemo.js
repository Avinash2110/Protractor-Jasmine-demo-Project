
var ScheduleDemo = function(){
    this.firstName = element(by.id('firstname-04315b8f-9e37-4371-8f29-e958f8b3f7c2'));
    this.lastName = element(by.id('lastname-04315b8f-9e37-4371-8f29-e958f8b3f7c2'));
    this.roleDropDown = element(by.id('role_sprint-04315b8f-9e37-4371-8f29-e958f8b3f7c2'));

    this.fillForm = function(){
        this.firstName.sendKeys('Avinash');
        this.lastName.sendKeys('Shukla');
        this.roleDropDown.$('[value="Business owner/CXO/Leader"]').click();
    }
}

module.exports = new ScheduleDemo();