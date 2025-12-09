const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');
const upload = require('../multerConfig');

router.get('/', clientController.getClients);
router.post('/', upload.single('image'), clientController.createClient);

module.exports = router;
