const Subscriber = require('../models/Subscriber');

exports.getSubscribers = async (req, res) => {
    try {
        const subscribers = await Subscriber.find().sort({ subscribedAt: -1 });
        res.json(subscribers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createSubscriber = async (req, res) => {
    try {
        const { email } = req.body;
        // Check if email already exists
        const existing = await Subscriber.findOne({ email });
        if (existing) {
            return res.status(400).json({ message: 'Email already subscribed' });
        }
        const subscriber = new Subscriber({ email });
        await subscriber.save();
        res.status(201).json(subscriber);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
