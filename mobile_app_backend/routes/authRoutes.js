const express = require('express');
const router = express.Router();
const { 
  login, 
  sendOTP, 
  verifyOTP, 
  resetPassword,
  changePassword  
} = require('../controllers/authController');

// Routes
router.post('/login', login);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/reset-password', resetPassword);
router.post('/change-password', changePassword);  

module.exports = router;