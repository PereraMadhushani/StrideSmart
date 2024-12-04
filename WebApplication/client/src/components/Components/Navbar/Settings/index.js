import React, { useState } from 'react';
import axios from 'axios';
import './index.css'; // Custom styles for the settings page

const Settings = () => {
  const [profilePicture, setProfilePicture] = useState(null);
  const [regNumber, setRegNumber] = useState('');  // User ID
  const [name, setName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Handle Profile Picture Upload
  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const handleProfilePictureUpload = () => {
    const formData = new FormData();
    formData.append('image', profilePicture);  // 'image' is the field expected by the backend
    formData.append('regNumber', regNumber);  // Pass userId

    axios.post('http://localhost:5000/setting/uploadProfilePicture', formData)
      .then(response => {
        alert(response.data.message);  // Display success message
      })
      .catch(error => {
        console.error(error);
        alert('Error uploading profile picture');
      });
  };

  // Handle Save Profile Changes (Name and Password)
  const handleSaveChanges = () => {
    const updatedProfile = {
      regNumber: regNumber,  // Pass the userId
      name,
      password: currentPassword,
      newPassword,
    };

    axios.post('http://localhost:5000/setting/updateProfile', updatedProfile)
      .then(response => {
        alert(response.data.message);  // Display success message
      })
      .catch(error => {
        console.error(error);
        alert('Error updating profile');
      });
  };

  return (
    <div className="profile-container">
      <h2>Update Profile</h2>

      {/* Profile Picture Upload */}
      <div>
        <h3>Upload Profile Picture</h3>
        <input
          type="file"
          onChange={handleProfilePictureChange}
          accept="image/*"
        />
        <button onClick={handleProfilePictureUpload}>Upload</button>
      </div>

      {/* Update Name and Password */}
      <div>
        <h3>Update Name and Password</h3>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Current Password:</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>

        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};
export default Settings;