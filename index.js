/**
 * Created by mysticprg on 15. 1. 2.
 */

var express = require('express');
var app = express();

//app.get('/', function(req, res) {
//    res.send('I Missing U jenny... from mysticPrg T-T...');
//});

app.use(express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.listen(8080, function () {
    console.log('Server is Running...');
});