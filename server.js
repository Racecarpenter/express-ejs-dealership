var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8000;
var path = require('path');
var vehicleRoute = require('./routes/vehicles');
var indexRoute = require('./routes/index');
var cookieParser = require('cookie-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(cors());

app.use('/', indexRoute)
app.use('/vehicles', vehicleRoute);

app.use(express.static(__dirname + '/public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.listen(port, function() {
  console.log('listening on: ', port);
})
