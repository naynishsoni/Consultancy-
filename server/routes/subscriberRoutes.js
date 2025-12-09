const express = require('express');
const router = express.Router();
const subscriberController = require('../controllers/subscriberController');

router.get('/', subscriberController.getSubscribers);
router.post('/', subscriberController.createSubscriber);

module.exports = router;
