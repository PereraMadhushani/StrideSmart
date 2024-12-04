// BackButton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/images/back_arrow.png'; // Path to your arrow icon
import './index.css';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // This will take the user back to the previous page
  };

  return (
    <button onClick={handleBack} className="back-button" aria-label="Go back">
      <img src={backArrow} alt="Back" />
    </button>
  );
}

export default BackButton;
