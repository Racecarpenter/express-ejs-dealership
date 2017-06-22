var express = require('express');
var router = express.Router();
var vehicles = require('../db/config');
var counter = 2

router.post('/', function(req, res, next) {
  vehicles.insert({
    vehicleID: counter,
    Make: req.body.Make,
    Model: req.body.Model,
    Year: req.body.Year
  });
  counter++;
  res.send('new vehicle created');
});

module.exports = router;
