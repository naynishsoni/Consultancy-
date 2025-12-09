const Client = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createClient = async (req, res) => {
    try {
        const { name, designation, description } = req.body;
        const client = new Client({
            name,
            designation,
            description,
            image: req.file ? `/uploads/${req.file.filename}` : '',
        });
        const newClient = await client.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
