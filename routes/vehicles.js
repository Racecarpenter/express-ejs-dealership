var express = require('express');
var router = express.Router();
var counter = 4

var Loki = require('lokijs');
var db = new Loki('loki.json');

var vehicles = require('../routes/index').vehicleList;

router.get('/', function(req, res) {
  res.send(vehicles.find());
})

router.get('/:id', function(req, res) {
  res.send(vehicleList.find(parseInt(req.params.vehicleID)))
})

router.post('/add', function(req, res, next) {
  vehicleList.insert({
    vehicleID: counter,
    Make: req.body.Make,
    Model: req.body.Model,
    Year: req.body.Year,
    KBBValue: req.body.KBBValue,
    Status: req.body.Status
  });
  counter++;
  res.send('new vehicle added to list');
});





module.exports = router;
