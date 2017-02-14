var express  = require('express');
var app      = express();
var port     = process.env.PORT || 81;

app.use(express.static(__dirname + './'));

app.use(express.static(__dirname + './css/*'));
app.use(express.static(__dirname + './js/*'));

app.get('/', function(req, res) {

    // render the page and pass in any flash data if it exists
    //res.render('signup.html', { message: req.flash('signupMessage') });
    res.sendFile(__dirname + '/index.html');
});

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);