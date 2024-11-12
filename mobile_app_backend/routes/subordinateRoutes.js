const express = require('express');
const router = express.Router();
const subordinateController = require('../controllers/subordinateController');

// Define the routes
router.get('/get-subordinates', subordinateController.getAll); // Ensure this matches the Flutter request
router.post('/add-subordinate', subordinateController.add);
router.put('/update-subordinate/:id', subordinateController.update);
router.delete('/delete-subordinate/:id', subordinateController.delete);

module.exports = router;

