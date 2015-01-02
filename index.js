/**
* Created by mysticprg on 15. 1. 2.
*/

var app = require('express')();

app.get('/', function(req, res) {
    res.send('Hello Docker World! with Auto Deploy!');
});

app.listen(8080);

//var exec = require('child_process').execFile;
//
//var child = exec('./restart.sh', function (err, stdout, stderr) {
//    console.log('stdout: ' + stdout);
//    console.log('stderr: ' + stderr);
//    if ( err ) {
//        console.log('exec err: ' + err);
//    }
//});