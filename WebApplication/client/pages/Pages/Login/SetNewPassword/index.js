import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const SetNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password validation and submission logic here
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.');
      setSuccess(false);
    } else if (password !== confirmPassword) {
      setMessage('Passwords do not match.');
      setSuccess(false);
    } else {
      setMessage('Password successfully reset.');
      setSuccess(true);
      // Add logic to handle password reset, e.g., API call
    }
  };

  return (
    <div className="set-new-password-body">
      <div className="set-new-password-container">
        <h2>Set new password</h2>
        <p>Must be at least 8 characters.</p>
        <form onSubmit={handleSubmit}>
          <div className="set-new-password-form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength="8"
            />
          </div>
          <div className="set-new-password-form-group">
            <label htmlFor="confirmPassword">Confirm password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength="8"
            />
          </div>
          
          <Link to="/login" className="set-new-password-btn">Reset password   </Link>
        </form>
        {message && <div className={`set-new-password-alert ${success ? 'success' : 'error'}`}>{message}</div>}
        {success && <div className="set-new-password-success">Your password has been reset.</div>}
      </div>
    </div>
  );
};

export default SetNewPassword;