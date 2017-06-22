var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicleList = db.addCollection('vehicleList');

vehicleList.insert([{
  "vehicleID": 1,
  "Make": "Ford",
  "Model": "Mustang",
  "Year": 1979,
  "KBBValue": 28999
}]);
module.exports = {
  vehicleList: vehicleList
};
