const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const EmailService = require('../services/emailService');

// Existing login controller
exports.login = async (req, res) => {
  try {
    const { regNumber, password } = req.body;

    if (!regNumber || !password) {
      return res.status(400).json({
        success: false,
        message: 'Registration number and password are required'
      });
    }

    const user = await User.findByRegNumber(regNumber);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    res.json({
      success: true,
      role: user.role,
      user: {
        id: user.id,
        regNumber: user.regNumber,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Existing Send OTP controller
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const user = await User.findByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Email not found'
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await User.updateOTP(email, otp);
    await EmailService.sendOTPEmail(email, otp);

    res.json({
      success: true,
      message: 'OTP sent to your email'
    });
  } catch (error) {
    console.error('OTP sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Error sending OTP'
    });
  }
};

// Existing Verify OTP controller
exports.verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        success: false,
        message: 'Email and OTP are required'
      });
    }

    const user = await User.verifyOTP(email, otp);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired OTP'
      });
    }

    res.json({
      success: true,
      message: 'OTP verified successfully'
    });
  } catch (error) {
    console.error('OTP verification error:', error);
    res.status(500).json({
      success: false,
      message: 'Error verifying OTP'
    });
  }
};

// Existing Reset Password controller
exports.resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Email and new password are required'
      });
    }

    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await User.resetPassword(email, hashedPassword);

    res.json({
      success: true,
      message: 'Password reset successfully'
    });
  } catch (error) {
    console.error('Password reset error:', error);
    res.status(500).json({
      success: false,
      message: 'Error resetting password'
    });
  }
};

// New Change Password controller
exports.changePassword = async (req, res) => {
  try {
    const { regNumber, oldPassword, newPassword } = req.body;

    // Input validation
    if (!regNumber || !oldPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Registration number, old password, and new password are required'
      });
    }

    // Find user
    const user = await User.findByRegNumber(regNumber);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Verify old password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    
    // Update password
    await User.updatePassword(regNumber, hashedPassword);

    res.json({
      success: true,
      message: 'Password changed successfully'
    });

  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({
      success: false,
      message: 'Error changing password',
      error: error.message
    });
  }
};