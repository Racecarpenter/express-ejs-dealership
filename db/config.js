var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicles = db.addCollection('vehicles');

vehicles.insert([{
  "vehicleID": 1
}]);
module.exports = {
  vehicles: vehicles
};
