import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import BackButton from '../../../Components/BackButton';

const AddNewUser = () => {
  const [user, setUser] = useState({
    id: '',
    regNumber: '',
    name: '',
    password: '',
    confirmPassword: '',
    role: 'employee', // Default value
    address: '',
    contact_number: '',
    email: '',
    image: null,
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset error messages
    setErrorMessages([]);

    // Validation
    const errors = [];

    // Validate Registration Number
    const regNumberPattern = /^[ASMED]-\d{3}$/;
    if (!regNumberPattern.test(user.regNumber)) {
      errors.push("Registration number must follow the pattern [A/S/M/E/D]-### (e.g., A-002).");
    }

    // Validate Contact Number
    const contactNumberPattern = /^07\d{8}$/;
    if (!contactNumberPattern.test(user.contact_number)) {
      errors.push("Contact number must start with 07 and be 10 digits long.");
    }

    // Validate Email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(user.email)) {
      errors.push("Please enter a valid email address.");
    }

    // Validate Passwords
    if (user.password !== user.confirmPassword) {
      errors.push("Passwords don't match.");
    }
    if (user.password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
    }

    if (errors.length > 0) {
      setErrorMessages(errors);
      return;
    }

    // Create FormData object to send both image and form data
    const formData = new FormData();
    formData.append('regNumber', user.regNumber);
    formData.append('name', user.name);
    formData.append('password', user.password);
    formData.append('role', user.role);
    formData.append('address', user.address);
    formData.append('contact_number', user.contact_number);
    formData.append('email', user.email);
    if (user.image) {
      formData.append('image', user.image);
    }

    try {
      setLoading(true);

      // Send the form data to the backend using Axios
      const response = await axios.post('http://localhost:5000/admin/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);

      // Check response and navigate if successful
      if (response.data.status === true || response.data.message === "User registered and notifications sent.") {
        setSuccessMessage('Employee added successfully');
        setTimeout(() => {
          navigate('/adminDashboard'); // Redirect after 2 seconds
        }, 2000);
        setUser({ ...user, regNumber: '', name: '', password: '', confirmPassword: '', role: 'employee', address: '', contact_number: '', email: '', image: null });
      } else {
        setErrorMessages([response.data.message || 'Unknown error']);
      }
    } catch (error) {
      setLoading(false);
      setErrorMessages([error.message || 'There was an error!']);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <BackButton />
        <h3>Register New User</h3>

        {/* Success Message */}
        {successMessage && <div className="alert alert-success">{successMessage}</div>}

        {/* Error Messages */}
        {errorMessages.length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {errorMessages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Form */}
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputRegNumber" className="form-label">
              Reg Number:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputRegNumber"
              placeholder="Enter Reg Number"
              value={user.regNumber}
              onChange={(e) => setUser({ ...user, regNumber: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword"
              placeholder="Enter Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputConfirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputConfirmPassword"
              placeholder="Enter Confirm Password"
              value={user.confirmPassword}
              onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Role:
            </label>
            <select
              className="form-control"
              value={user.role}
              onChange={(e) => setUser({ ...user, role: e.target.value })}
            >
              <option value="manager">Manager</option>
              <option value="admin">Admin</option>
              <option value="storemanager">Store Manager</option>
              <option value="employee">Employee</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              value={user.address}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, address: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputContactNumber" className="form-label">
              Contact Number:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputContactNumber"
              placeholder="076123456"
              value={user.contact_number}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, contact_number: e.target.value })}
              required
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputEmail"
              placeholder="abcde@gmail.com"
              value={user.email}
              autoComplete="off"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
            />
          </div>

          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setUser({ ...user, image: e.target.files[0] })}
              required
            />
          </div>

          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary rounded-0"
              disabled={loading}
            >
              {loading ? 'Adding...' : 'Add User'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewUser;
