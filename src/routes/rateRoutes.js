
const express = require('express');
const router = express.Router();
const currencyController = require('../controllers/currencyController');

// Route that uses the controller function
router.get('/rate', currencyController.getRate);

// Subscribe an email for rate updates
router.post('/subscribe', currencyController.subscribeEmail);


module.exports = router;
