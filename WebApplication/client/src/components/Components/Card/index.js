// src/Card.js
import React from 'react';
import './index.css';

const Card = ({ image, title, onClick , isButton}) => {
  return (
    <div className="card">
    {isButton ? (
      <button onClick={onClick} className="card-button">
        <img src={image} alt={title} className="card-image"/>
        <div className="card-title">{title}</div>
      </button>
    ) : (
      <>
        <img src={image} alt={title} className="card-image" />
        <div className="card-title">{title}</div>
        <button onClick={onClick} className="card-button">View</button>
      </>
    )}
  </div>
  );
};

export default Card;
