var mongoose = require('mongoose');

var restaurantSchema = new mongoose.Schema({
  restaurant: String,
  menu: String,
  date: String,
  completed: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('restaurants', restaurantSchema);