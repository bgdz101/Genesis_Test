require('dotenv').config();
require('./services/schedulerService.js');
const express = require('express');
const rateRoutes = require('./routes/rateRoutes');
const app = express();
const mongoose = require('mongoose');
const DATABASE = process.env.DATABASE;

app.use(express.static('public'));

// Built-in middleware to parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));

// Built-in middleware to parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use('/api', rateRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Connect to MongoDB
mongoose.connect(DATABASE, {
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Connection error', err);
});

module.exports = app;