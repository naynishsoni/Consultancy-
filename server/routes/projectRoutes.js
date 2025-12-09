const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const upload = require('../multerConfig');

router.get('/', projectController.getProjects);
router.post('/', upload.single('image'), projectController.createProject);

module.exports = router;
