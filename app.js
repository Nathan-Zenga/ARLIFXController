// import modules
var express = require('express'),
	bodyParser = require('body-parser'),
	path = require('path'),
	ejs = require('ejs');

// Initialise app
var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Global variables
app.use(function (req, res, next) {
	res.locals.errors = null;
	next();
});

app.use('/', require('./routes/index'));

// Set port + listen for requests
app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), function() {
	console.log('Server started on port ' + app.get('port'));
});