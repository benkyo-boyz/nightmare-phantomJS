var Nightmare = require('nightmare'),
    url = 'https://chouseisancal.com/';

new Nightmare()
    .viewport(800, 600)
    .goto(url + 'kone.is.running.daiki')
    .wait()
    .screenshot('screenshots/simple/001.png')
    .goto(url + 'book/add/kone.is.running.daiki/2015-11-05T10:00')
    .wait()
    .type('#form_name', '名前だよ')
    .type('#form_mail', 'foo@foo.jp')
    .type('#form_tel', '09012345678')
    .click('button[type="submit"]')
    .screenshot('screenshots/simple/002.png')
    .wait()
    .screenshot('screenshots/simple/003.png')
    .goto(url + 'kone.is.running.daiki')
    .wait()
    .screenshot('screenshots/simple/004.png')
    .run(function(err, nightmare) {
        if(err) return console.log(err);
        console.log('Done !');
    });
