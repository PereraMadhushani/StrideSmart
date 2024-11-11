const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

class EmailService {
  static async sendOTPEmail(email, otp) {
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Your OTP for Password Reset',
        html: `
          <h2>Password Reset OTP</h2>
          <p>Your OTP for password reset is: <strong>${otp}</strong></p>
          <p>This OTP will expire in 15 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        `,
      });
      return true;
    } catch (error) {
      console.error('Email sending error:', error);
      throw error;
    }
  }
}

module.exports = EmailService;