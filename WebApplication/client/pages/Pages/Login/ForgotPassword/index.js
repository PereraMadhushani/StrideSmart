import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Add the unique class to the body element
    document.body.classList.add('forgot-password-body');

    // Remove the unique class from the body element on cleanup
    return () => {
      document.body.classList.remove('forgot-password-body');
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setMessage('Reset link sent to your email.');
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>No worries, we’ll send you reset instructions.</p>
      <form onSubmit={handleSubmit}>
        <div className="forgot-password-form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <Link to="/otpVerification" className="forgot-password-btn">Reset Password</Link>
        
      </form>
      {message && <div className="forgot-password-alert">{message}</div>}
    </div>
  );
};

export default ForgotPassword;
