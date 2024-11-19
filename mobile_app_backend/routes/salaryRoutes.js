const express = require('express');
const router = express.Router();
const SalaryController = require('../controllers/salaryController');

// Routes
router.get('/salary/salaries', SalaryController.getAllSalaries); // Updated path
router.post('/salary/generate-slip', SalaryController.generateSalarySlip); // Updated path

module.exports = router;