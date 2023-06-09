// Import required modules
const express = require('express');
const { pool } = require('./dbConnection');

const PORT = 8080;
// Create an instance of Express.js
const app = express();

// Set up routes

// Route: GET request with params
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Retrieve user data from the database
  // ...
  res.send(`User ID: ${userId}`);
});

// Route: GET request with query
app.get('/users', (req, res) => {
  const { name, age } = req.query;
  // Retrieve user data based on query parameters
  // ...
  res.send(`Name: ${name}, Age: ${age}`);
});

// Route: POST request
app.post('/users', (req, res) => {
  const { name, age } = req.body;
  // Create a new user in the database
  // ...
  res.send('User created');
});

// Route: PUT request
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Update user data in the database
  // ...
  res.send(`User ID ${userId} updated`);
});

// Route: DELETE request
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Delete user from the database
  // ...
  res.send(`User ID ${userId} deleted`);
});

// Serve HTML and CSS files using express.static middleware
//app.use(express.static('public'));

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
