const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema({
  name: String,
  formula: String,
  price: Number,
  manufacturing: String,
  expiry: Date,
  image: String,
  company: String,
  description: String
});

const Medicine = mongoose.model('Medicine', medicineSchema);

module.exports = Medicine;
