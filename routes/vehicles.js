var express = require('express');
var router = express.Router();
var vehicles = require('../db/config');

router.get('/', function(req, res) {
  res.render('vehicles', {
    vehicleList: vehicles.find()
  });
})

module.exports = router;
