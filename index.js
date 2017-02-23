var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8081;
var path = require('path')

var bodyParser = require('body-parser');
app.use(bodyParser());

// app.use(express.static('css'))
// app.use(express.static('images'))
app.use(express.static(__dirname + '/'));

app.use(express.static(path.join(__dirname, '/css')));
app.use(express.static(path.join(__dirname, 'fonts')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'sass')));
app.use(express.static(path.join(__dirname, 'vendor')));
app.use(express.static(path.join(__dirname, 'less')));

// app.use(express.static('css'))
// app.use(express.static('images'))

app.get('/', function(req, res) {

    // render the page and pass in any flash data if it exists
    //res.render('signup.html', { message: req.flash('signupMessage') });
    res.sendFile(__dirname + '/index.html');
});

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);