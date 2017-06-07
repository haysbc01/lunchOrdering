var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  restaurant: String,
  food: String,
  drink: String,
  name: String,
  id: String,
  day: String,
  date: String
});

module.exports = mongoose.model('orders', orderSchema);