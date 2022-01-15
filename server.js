'use strict'

var express = require('express');

// App
var app = express();
app.set('port', (process.env.PORT || 5000));

// your angular-project folder
app.use('/', express.static(__dirname + '/angular-project'));

app.listen(app.get('port'), function() {
    console.log("running: port", app.get('port'));
});