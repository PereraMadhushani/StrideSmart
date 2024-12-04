import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/verify-otp', { otp });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Verification failed. Please try again.');
    }
  };

  return (
    <div className="otp-verification-body">
      <div className="otp-verification-container">
        <h2>OTP Verification</h2>
        <p>Please enter the OTP sent to your email.</p>
        <form onSubmit={handleSubmit}>
          <div className="otp-verification-form-group">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              maxLength="6"
            />
          </div>
          <button type="submit" className="otp-verification-btn">Verify OTP</button>
          
          
        </form>
        {message && <div className="otp-verification-alert">{message}</div>}
      </div>
    </div>
  );
};

export default OtpVerification;