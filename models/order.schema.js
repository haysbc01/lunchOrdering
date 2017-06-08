var mongoose = require('mongoose');

var orderSchema = new mongoose.Schema({
  restaurant: String,
  food: String,
  drink: String,
  name: String,
  id: String,
  day: String,
  date: String,
  cost: {
      typy: Number,
      default: 0
  },
  completed: {
    type: Boolean,
    default: false
  },
  paid: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('orders', orderSchema);