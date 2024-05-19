import { fetchRate, subscribeEmail } from './rateModule.js';


document.getElementById('currentRate').addEventListener('click', fetchRate);
document.getElementById('subscriptionForm').addEventListener('submit', subscribeEmail);