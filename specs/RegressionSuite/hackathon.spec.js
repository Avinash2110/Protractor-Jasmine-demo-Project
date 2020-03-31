var home = require('../../pages/Home');
var scheduleDemo = require('../../pages/ScheduleDemo');

describe('Go to Hackathon page', function(){

    var url = 'https://www.hackerearth.com/';
   

    it('Hackathons', function(){

        home.goToHackathons();

    })

    it('Developer Assessments Page', function(){

        element(by.css('.button')).click();
        browser.sleep(2000);

        scheduleDemo.fillForm();

        browser.sleep(2000);

    })
})