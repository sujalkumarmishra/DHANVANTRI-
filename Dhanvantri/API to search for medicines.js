const express = require('express');
const app = express();
const medicines = require('./medicines.json'); // Mock database or use a real one

// Search API
app.get('/api/medicines', (req, res) => {
  const searchQuery = req.query.search.toLowerCase();
  const filteredResults = medicines.filter(med =>
    med.name.toLowerCase().includes(searchQuery)
  );
  res.json(filteredResults);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});