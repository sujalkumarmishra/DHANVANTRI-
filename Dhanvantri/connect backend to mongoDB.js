const express = require('express');
const mongoose = require('mongoose');
const Medicine = require('./models/Medicine'); // Medicine model

const app = express();

mongoose.connect('mongodb://localhost:27017/medicinedb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Search API with MongoDB
app.get('/api/medicines', async (req, res) => {
  const searchQuery = req.query.search;
  const results = await Medicine.find({ name: { $regex: searchQuery, $options: 'i' } });
  res.json(results);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
