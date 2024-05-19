const mongoose = require('mongoose');

// Define a schema
const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true 
  },
  status: {
    type: String,
    default: 'subscribed', // Default status of a new subscription
    enum: ['subscribed', 'unsubscribed'] // Allowed values
  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically set the date when a record is created
  }
});

// Create a model from the schema
const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
