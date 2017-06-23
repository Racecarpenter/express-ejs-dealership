var express = require('express');
var router = express.Router();

var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicleList = db.addCollection('vehicleList');

var counter = 4;
vehicleList.insert([{
    "vehicleID": 1,
    "Make": "Ford",
    "Model": "Mustang",
    "Year": 1979,
    "KBBValue": "$28999",
    "Status": "Available",
    "Mileage": 50205,
    "Condition": "Excellent",
    "Accident": "No"
  },
  {
    "vehicleID": 2,
    "Make": "DeLorean",
    "Model": "D",
    "Year": 1984,
    "KBBValue": "$55999",
    "Status": "Available",
    "Mileage": 255565,
    "Condition": "Okay",
    "Accident": "Yes"
  },
  {
    "vehicleID": 3,
    "Make": "Ferrari",
    "Model": "Countach",
    "Year": 1999,
    "KBBValue": "$79999",
    "Status": "Available",
    "Mileage": 50205,
    "Condition": "Excellent",
    "Accident": "No"
  }
]);




router.get('/', function(req, res) {
  res.render('index', {
    vehicleList: vehicleList.find()
  });
});

router.post('/add', function(req, res) {
  vehicleList.insert({
    vehicleID: counter,
    Make: req.body.Make,
    Model: req.body.Model,
    Year: req.body.Year,
    KBBValue: req.body.KBBValue,
    Status: req.body.Status
  })
  counter++;
  res.redirect('/');
})


router.post('/sold/:id', function(req, res, next) {
  vehicleList.findAndUpdate({
    vehicleID: parseInt(req.params.id)
  }, function(data) {
    data.Status = "Sold"
  })
  res.redirect('/');
});

router.post('/available/:id', function(req, res, next) {
  vehicleList.findAndUpdate({
    vehicleID: parseInt(req.params.id)
  }, function(data) {
    data.Status = "Available"
  })
  res.redirect('/');
});

router.post('/pending/:id', function(req, res, next) {
  vehicleList.findAndUpdate({
    vehicleID: parseInt(req.params.id)
  }, function(data) {
    data.Status = "Sale Pending"
  })
  res.redirect('/');
});

router.post('/update/:id', function(req, res, next) {
  vehicleList.findAndUpdate({
    vehicleID: parseInt(req.params.id)
  }, function(data) {
    data.KBBValue = req.body.KBBValue;
  })
  res.redirect('/');
});

router.post('/remove', function(req, res, next) {
  vehicleList.findAndRemove({
    Status: "Sold"
  })
  res.redirect('/');
})


module.exports = router;
