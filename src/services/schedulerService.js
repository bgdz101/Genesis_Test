require('dotenv').config();
const cron = require('node-cron');
const axios = require('axios');
const { sendEmail } = require('../utils/emailUtils'); // Import the sendEmail function
const Subscription = require('../models/subscription'); // Assuming you have this model


async function fetchSubscribers() {
    console.log("Fetching subscribers from the database...");
    try {
        const subscribers = await Subscription.find({});
        console.log("Subscribers fetched:", subscribers);
        return subscribers;
    } catch (error) {
        console.error("Error fetching subscribers:", error);
        return [];
    }
}

// Function to fetch the latest exchange rates
async function fetchLatestExchangeRate() {
  try {
    const APIKEY = process.env.APIKEY;
    const response = await axios.get(`https://v6.exchangerate-api.com/v6/${APIKEY}/latest/USD`);
    return response.data.conversion_rates.UAH;
  } catch (error) {
    console.error('Failed to fetch the latest exchange rate', error);
    return null;
  }
}


// Schedule a task to run every day at 8 AM 
cron.schedule('0 8 * * *', async () => {
    console.log('Running a daily task at 8 AM to update subscribers with the latest rate.');
    const latestRate = await fetchLatestExchangeRate();
    const subscribers = await fetchSubscribers();

    subscribers.forEach(subscriber => {
        sendEmail(subscriber.email, 'Daily Exchange Rate Update', `The current USD to UAH rate is ${latestRate}`);
    });
});