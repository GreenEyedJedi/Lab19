var express = require('express'),   // web framework
    ejs     = require('ejs'),       // templates
    mysql   = require('mysql'),     // database
    connect = require('connect');   // GET and POST request parser

var routes = require('./controller/index');
var user = require('./controller/user');

var app = express();                // initialize express
//app.use(connect.bodyParser());      // initialize request parser
app.use(connect.urlencoded());
app.use(connect.json());
app.use(express.static('public'));  // configure static directory

app.set('view engine', 'ejs');       // set .ejs as the default template extension.
app.set('views', __dirname + '/views'); //set where view templates are located

app.set('subtitle', 'Lab 19');

app.use('/', routes);
app.use('/user', user);

app.listen(8001);
console.log("Express server listening on port %s", 8001);