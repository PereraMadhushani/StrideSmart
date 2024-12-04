import React from 'react';
import mapImage from '../../assets/images/map-image.png'; // Ensure you have the map image
import person from '../../assets/images/person.png';
import Navbar from '../../Components/Navbar';
import BackButton from '../../Components/BackButton';
import './index.css';

const DriverDetails = () => {
  
  return (
    
      <><Navbar />
      
   <div className="driver-details">
        <div className="driver-info">
          <img src={person} alt="User Icon" className="user-icon-large" />
          <div className="driver-text">
            
          </div>
        </div>
        <div className="live-location">
          <h2>Live Location</h2>
          <img src={mapImage} alt="Map" className="map-image" />
        </div>
        <div className="order-buttons">
          <button className="targeting-orders">Targeting Orders</button>
          <button className="received-orders">Received Orders</button>
        </div>
        <BackButton />
      </div></>
  );
}

export default DriverDetails;
