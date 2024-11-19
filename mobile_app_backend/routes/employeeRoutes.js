const express = require('express');
const router = express.Router();
const EmployeeController = require('../controllers/employeeController');

// Get employee details
router.get('/employee/:regNumber', EmployeeController.getEmployeeDetails);

// Update employee details
router.put('/employee/:regNumber', EmployeeController.updateEmployeeDetails);

// Search employees
router.get('/employees/search', EmployeeController.searchEmployees);

module.exports = router;