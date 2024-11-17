const express = require('express');
const router = express.Router();
const LeaveController = require('../controllers/leaveController');


router.post('/apply-leave', LeaveController.applyLeave);
router.get('/leaves', LeaveController.getLeaves);

module.exports = router;