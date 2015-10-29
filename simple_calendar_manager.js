var Nightmare = require('nightmare'),
    url = 'https://chouseisancal.com/';

new Nightmare()
    .viewport(800, 600)
    .goto(url  + 'manager/login/google_login')
    .wait()
    .screenshot('screenshots/simple/m001.png')
    .type('#Email', 'kone.is.running.daiki@gmail.com')
    .screenshot('screenshots/simple/m002.png')
    .click('input[name="signIn"]')
    .wait()
    .type('#Passwd', 'hogehoge')
    .screenshot('screenshots/simple/m003.png')
    .click('input[name="signIn"]')
    .wait()
    .screenshot('screenshots/simple/m004.png')
    .click('button[id="submit_approve_access"]')
    .wait()
    .screenshot('screenshots/simple/m005.png')
    .run(function(err, nightmare) {
        if(err) return console.log(err);
        console.log('Done !');
    });
