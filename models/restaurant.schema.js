var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  restaurant: String,
  menu: String,
  day: Array,
});

module.exports = mongoose.model('restaurants', restaurantSchema);