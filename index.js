/**
 * Created by mysticprg on 15. 1. 2.
 */

var app = require('express')();

app.get('/', function(req, res) {
    res.send('Hello Docker World!');
});

app.listen(8080);
