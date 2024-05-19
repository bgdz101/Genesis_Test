// src/controllers/currencyController.js
require('dotenv').config();
const nodemailer = require('nodemailer');
const axios = require('axios');
const Subscription = require('../models/subscription');


const APIKEY = process.env.APIKEY;

// function to get the exchange rate
exports.getRate = async (req, res) => {
    try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`);
        const rate = response.data?.conversion_rates?.UAH;
        if (rate) {
            console.log(`Retrieved UAH rate: ${rate}`); // More specific log
            res.json({ rate });
        } else {
            throw new Error("UAH rate not found in the response");
        }
    } catch (error) {
        console.error("Error fetching rate:", error);
        res.status(500).json({ message: "Error fetching rate", error: error.message });
    }
    
};

//function to subscribe an email
exports.subscribeEmail = async (req, res) => {
    const { email } = req.body;

    // Check if the email is provided
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    try {
        // Check if the email already exists in the database
        let subscription = await Subscription.findOne({ email });
        if (subscription) {
            return res.status(409).json({ error: 'Email already subscribed.' });
        }

        // Create a new subscription if email does not exist
        subscription = new Subscription({ email, status: 'subscribed' });  // Assuming 'status' field defaults to 'subscribed'
        await subscription.save();

        res.status(200).json({ message: 'Email successfully subscribed.' });
    } catch (error) {
        console.error('Error in subscribeEmail:', error);  // Log the error for debugging
        res.status(500).json({ error: 'Server error' });
    }
};
