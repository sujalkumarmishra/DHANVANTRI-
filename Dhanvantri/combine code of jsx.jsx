<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Page</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- Header Section -->
    <header>
        <div class="logo">
            <h1>Dhanvantari</h1>
        </div>
        <div class="social-media">
            <a href="https://telegram.org"><img src="telegram-icon.png" alt="Telegram"></a>
            <a href="https://instagram.com"><img src="instagram-icon.png" alt="Instagram"></a>
            <a href="https://facebook.com"><img src="facebook-icon.png" alt="Facebook"></a>
            <a href="https://linkedin.com"><img src="linkedin-icon.png" alt="LinkedIn"></a>
        </div>
    </header>

    <!-- Profile Form Section -->
    <div class="container">
        <form class="profile-form">
            <h2>Profile Information</h2>
            <div class="profile-picture">
                <img src="profile-photo-placeholder.png" alt="Profile Picture">
                <input type="file" accept="image/*">
            </div>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required>

            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required>

            <label for="email-or-phone">Email or Phone Number:</label>
            <input type="text" id="email-or-phone" name="email-or-phone" placeholder="Enter your email or phone number" required>

            <button type="submit">Submit</button>
        </form>

        <title>Notification Toggle</title>
        </div>
    </div>
    <div class="logo">
        <h1>Dhanvantari</h1>
    </div>
</header>

<!-- Health Details Form Section -->
<div class="container">
    <form class="health-details-form">
        <h2>Basic Health Details</h2>
        <label for="age">Age:</label>
        <input type="number" id="age" name="age" placeholder="Enter your age" required>

        <label for="height">Height (in cm):</label>
        <input type="number" id="height" name="height" placeholder="Enter your height in cm" required>

        <label for="weight">Weight (in kg):</label>
        <input type="number" id="weight" name="weight" placeholder="Enter your weight in kg" required>

        <label for="blood-group">Blood Group:</label>
        <select id="blood-group" name="blood-group" required>
            <option value="">Select your blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
        </select>

        <label for="medical-history">Medical History:</label>
        <textarea id="medical-history" name="medical-history" rows="4" placeholder="Briefly describe any medical history or conditions"></textarea>

        <button type="submit">Submit</button>
    </form>
</div>

 <!-- Medicine Search Section -->
 <div class="container">
    <h2>Search for Medicine</h2>
    <form class="search-form">
        <input type="text" id="medicine-search" placeholder="Enter medicine name..." required>
        <button type="submit">Search</button>
    </form>

    <!-- Results Section -->
    <div class="medicine-results">
        <h3>Results for "<span id="search-query"></span>":</h3>
        <div class="medicine-list" id="medicine-list">
            <!-- Dynamically populated medicine cards will appear here -->
        </div>
    </div>
</div>

<!-- Example of a single medicine card -->
<template id="medicine-template">
    <div class="medicine-card">
        <img src="medicine-image-placeholder.png" alt="Medicine Image" class="medicine-image">
        <div class="medicine-info">
            <h4 class="medicine-name">Medicine Name</h4>
            <p><strong>Company:</strong> <span class="company-name">Company Name</span></p>
            <p><strong>Formula:</strong> <span class="medicine-formula">Formula</span></p>
            <p><strong>Use:</strong> <span class="medicine-use">Use in one line</span></p>
            <p><strong>Price:</strong> ₹<span class="medicine-price">Price</span></p>
            <p><strong>Compared to Generic:</strong> <span class="generic-comparison">Comparison details</span></p>
            <button class="buy-button">Shop Now</button>
        </div>
    </div>
</template>

<script src="script.js"></script>

 <!-- Header Section -->
 <header>
    <div class="logo">
        <h1>Dhanvantari</h1>
    </div>
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Order History</a></li>
        </ul>
    </nav>
</header>

<!-- Order History Section -->
<div class="container">
    <h2>Order History</h2>

    <!-- Example of an Order Card -->
    <div class="order-card">
        <div class="order-info">
            <img src="product-image.jpg" alt="Product Image" class="order-product-image">
            <div class="order-details">
                <h3>Product Name</h3>
                <p><strong>Order ID:</strong> #123456789</p>
                <p><strong>Date:</strong> 2023-10-01</p>
                <p><strong>Status:</strong> Delivered</p>
                <p><strong>Price:</strong> ₹1,999</p>
            </div>
        </div>
        <div class="order-actions">
            <button class="track-order-button">Track Order</button>
            <button class="reorder-button">Reorder</button>
        </div>
    </div>

    <!-- Repeat for more orders -->
    <div class="order-card">
        <div class="order-info">
            <img src="product-image2.jpg" alt="Product Image" class="order-product-image">
            <div class="order-details">
                <h3>Another Product Name</h3>
                <p><strong>Order ID:</strong> #987654321</p>
                <p><strong>Date:</strong> 2023-09-15</p>
                <p><strong>Status:</strong> Shipped</p>
                <p><strong>Price:</strong> ₹2,499</p>
            </div>
        </div>
        <div class="order-actions">
            <button class="track-order-button">Track Order</button>
            <button class="reorder-button">Reorder</button>
        </div>
    </div>

    <!-- More order cards can be dynamically populated -->
</div>

<!-- Header Section for Product Details -->
<div class="product-details">
    <img src="product-image.jpg" alt="Product Image" class="product-image">
    <div class="product-info">
        <h3>Product Name</h3>
        <p><strong>Price:</strong> ₹999</p>
        <p><strong>Manufactured:</strong> July 2023</p>
        <p><strong>Expiry:</strong> July 2024</p>
    </div>
</div>

<!-- Payment Form Section -->
<div class="payment-container">
    <h2>Payment Details</h2>
    <form class="payment-form">
        <!-- Personal Details -->
        <div class="form-group">
            <label for="name">Person Name</label>
            <input type="text" id="name" name="name" required>
        </div>

        <div class="form-group">
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required>
        </div>

        <div class="form-group">
            <label for="email">Email ID</label>
            <input type="email" id="email" name="email" required>
        </div>

        <div class="form-group">
            <label for="address">Address</label>
            <textarea id="address" name="address" required></textarea>
        </div>

        <div class="form-group">
            <label for="landmark">Landmark</label>
            <input type="text" id="landmark" name="landmark" required>
        </div>

        <!-- Payment Methods -->
        <h3>Select Payment Method</h3>
        <div class="payment-methods">
            <div class="form-group">
                <input type="radio" id="cod" name="payment-method" value="COD" required>
                <label for="cod">Cash on Delivery</label>
            </div>

            <div class="form-group">
                <input type="radio" id="upi" name="payment-method" value="UPI">
                <label for="upi">UPI</label>
                <img src="upi-logo.png" alt="UPI" class="payment-logo">
            </div>

            <div class="form-group">
                <input type="radio" id="credit-card" name="payment-method" value="Credit Card">
                <label for="credit-card">Credit Card</label>
                <img src="credit-card-logo.png" alt="Credit Card" class="payment-logo">
            </div>

            <!-- You can add more payment methods similarly -->
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-button">Place Order</button>
    </form>
</div>
</body>
</html>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #333;
    color: white;
}

header .logo h1 {
    font-size: 24px;
}

header .social-media a {
    margin-left: 15px;
}

header .social-media img {
    width: 24px;
    height: 24px;
}

.container {
    max-width: 500px;
    margin: 50px auto;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.profile-form {
    display: flex;
    flex-direction: column;
}

.profile-form h2 {
    margin-bottom: 20px;
    text-align: center;
}

.profile-form label {
    margin-bottom: 5px;
}

.profile-form input[type="text"], .profile-form input[type="file"] {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.profile-picture {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
}

.profile-picture img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 10px;
}

button[type="submit"] {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #555;
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.notification-button {
    padding: 10px 20px;
    background-color: #ff9800;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.notification-button:hover {
    background-color: #e68900;
}

.auth-options a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
}

.auth-options a:hover {
    text-decoration: underline;
}
.health-details-form {
    display: flex;
    flex-direction: column;
}

.health-details-form h2 {
    margin-bottom: 20px;
    text-align: center;
}

.health-details-form label {
    margin-bottom: 5px;
}

.health-details-form input[type="number"], .health-details-form select, .health-details-form textarea {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}

.health-details-form textarea {
    resize: vertical;
}

button[type="submit"] {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #555;
}

/* Styling for the search page */
.search-form {
    display: flex;
    justify-content: center;
    margin: 20px 0;
}

.search-form input[type="text"] {
    width: 300px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
}

.search-form button {
    padding: 10px 20px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.search-form button:hover {
    background-color: #555;
}

.medicine-results {
    margin-top: 30px;
}

.medicine-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.medicine-card {
    width: 200px;
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
    background-color: white;
}

.medicine-image {
    width: 100%;
    height: 120px;
    object-fit: contain;
    margin-bottom: 10px;
}

.medicine-info h4 {
    margin-bottom: 5px;
}

.medicine-info p {
    margin: 5px 0;
}

.buy-button {
    padding: 10px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.buy-button:hover {
    background-color: #218838;
}


/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

/* Header Section */
header {
    background-color: #333;
    color: white;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header .logo h1 {
    margin: 0;
    font-size: 24px;
}

header nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    gap: 20px;
}

header nav ul li {
    display: inline;
}

header nav ul li a {
    color: white;
    text-decoration: none;
}

header nav ul li a:hover {
    text-decoration: underline;
}

/* Container for Order History */
.container {
    max-width: 1200px;
    margin: 30px auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
    text-align: center;
    margin-bottom: 30px;
}

/* Order Card Styling */
.order-card {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 20px 0;
}

.order-card:last-child {
    border-bottom: none;
}

.order-info {
    display: flex;
    align-items: center;
}

.order-product-image {
    width: 100px;
    height: 100px;
    object-fit: contain;
    margin-right: 20px;
}

.order-details h3 {
    margin: 0 0 10px;
}

.order-details p {
    margin: 5px 0;
}

/* Order Action Buttons */
.order-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.track-order-button, .reorder-button {
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

.track-order-button {
    background-color: #28a745;
    color: white;
}

.track-order-button:hover {
    background-color: #218838;
}

.reorder-button {
    background-color: #007bff;
    color: white;
}

.reorder-button:hover {
    background-color: #0069d9;
}


/* General Styling */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
}

h2, h3 {
    text-align: center;
}

/* Product Details Section */
.product-details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    margin: 20px auto;
    width: 90%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

.product-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
}

.product-info {
    flex-grow: 1;
}

.product-info h3 {
    margin: 0 0 10px;
}

.product-info p {
    margin: 5px 0;
}

/* Payment Form Styling */
.payment-container {
    background-color: #fff;
    padding: 20px;
    margin: 20px auto;
    width: 90%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.payment-form .form-group {
    margin-bottom: 15px;
}

.payment-form label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

.payment-form input[type="text"],
.payment-form input[type="tel"],
.payment-form input[type="email"],
.payment-form textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.payment-form textarea {
    height: 80px;
}

.payment-methods {
    margin-top: 20px;
}

.payment-methods .form-group {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.payment-logo {
    width: 50px;
    height: auto;
    margin-left: 10px;
}

.submit-button {
    width: 100%;
    padding: 15px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
}

.submit-button:hover {
    background-color: #218838;
}
/* Styling the Notification Button */
.notification-icon {
    display: inline-block;
    cursor: pointer;
    font-size: 24px;
    padding: 10px;
    border-radius: 50%;
    transition: background-color 0.3s ease;
    text-align: center;
}

.notification-on {
    color: #4caf50;
    background-color: #e8f5e9;
}

.notification-off {
    color: #f44336;
    background-color: #ffebee;
}

.notification-text {
    margin-left: 10px;
    font-size: 18px;
    vertical-align: middle;
}
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
[
    {
      "name": "Paracetamol",
      "formula": "Acetaminophen 500mg",
      "price": 15.99,
      "manufacturing": "Pfizer",
      "expiry": "2024-12-31",
      "image": "paracetamol.jpg",
      "company": "Pfizer",
      "description": "Relief from fever, headache, and body pain."
    },
    {
      "name": "Ibuprofen",
      "formula": "Ibuprofen 400mg",
      "price": 25.00,
      "manufacturing": "GSK",
      "expiry": "2025-08-15",
      "image": "ibuprofen.jpg",
      "company": "GSK",
      "description": "Pain relief, anti-inflammatory."
    }
  ]
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

import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Filters from './Filters';
import SearchResults from './SearchResults';

function App() {
  const [medicines, setMedicines] = useState([]);
  const [filteredMedicines, setFilteredMedicines] = useState([]);
  const [filters, setFilters] = useState({
    type: 'all',
    manufacturer: 'all',
    price: 100
  });

  // Fetch data from the API
  const fetchMedicines = (query = '') => {
    fetch(`/api/medicines?search=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMedicines(data);
        setFilteredMedicines(data);  // Initially, no filters applied
      });
  };

  useEffect(() => {
    // Fetch all medicines on initial load
    fetchMedicines();
  }, []);

  // Handle search from the SearchBar
  const handleSearch = (searchItem) => {
    fetchMedicines(searchItem.name);
  };

  // Apply filters to the medicines list
  useEffect(() => {
    let filtered = medicines;

    if (filters.type !== 'all') {
      filtered = filtered.filter((medicine) => medicine.type === filters.type);
    }

    if (filters.manufacturer !== 'all') {
      filtered = filtered.filter(
        (medicine) => medicine.company === filters.manufacturer
      );
    }

    filtered = filtered.filter(
      (medicine) => medicine.price <= filters.price
    );

    setFilteredMedicines(filtered);
  }, [filters, medicines]);

  return (
    <div className="App">
      <h1>Medicine Search</h1>

      {/* Search Bar */}
      <SearchBar onSearch={handleSearch} />

      {/* Filters */}
      <Filters filters={filters} setFilters={setFilters} />

      {/* Search Results */}
      <SearchResults results={filteredMedicines} />
    </div>
  );
}

export default App;
