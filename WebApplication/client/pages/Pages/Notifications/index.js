import React from 'react';
import Navbar from '../../Components/Navbar'; // Ensure the case and path are correct
import './index.css';
//import userIcon from '../../assets/person.png'; // Ensure the path to the image is correct
import { useTranslation } from 'react-i18next';

const Notifications = () => {
  return (
    <div className="notifications">
      <h1>NOTIFICATIONS</h1>
      <div className="notification-controls">
        <button className="unread">Unread</button>
        <button className="read">Read</button>
        <button className="archived">Archived</button>
      </div>
      <div className="notification-section">
        <div className="notification-category">
          <h2>TODAY <span className="notification-count">5</span></h2>
          <button className="see-all">SEE ALL</button>
          <div className="notification-item">
            
            <p>MATERIAL ARE RECEIVED.</p>
          </div>
        </div>
        <div className="notification-category">
          <h2>YESTERDAY</h2>
          <button className="see-all">SEE ALL</button>
          <div className="notification-item">
            
            <p>MATERIAL ARE RECEIVED.</p>
          </div>
        </div>
        <div className="notification-category">
          <h2>EARLIER</h2>
          <button className="see-all">SEE ALL</button>
          <div className="notification-item">
            
            <p>MATERIAL ARE RECEIVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notifications;
