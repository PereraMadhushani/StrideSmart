import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddDriverForm = () => {
  const [driver, setDriver] = useState({
    user_id: "",
    name: "",
    address: "",
    contact_number: "",
    email: "",
    image:""
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('user_id', driver.user_id);
    formData.append('name', driver.name);
    formData.append('address', driver.address);
    formData.append('contact_number', driver.contact_number);
    formData.append('email', driver.email);
    formData.append('image', driver.image);

    // Axios POST request
    axios.post('http://localhost:5000/auth/add_driver', formData)
      .then((result) => {
        if (result.data.Status) {
          navigate('/drivers'); // Redirect on successful response
        } else {
          alert(result.data.Error); // Handle error message from response
        }
      })
      .catch((err) => {
        console.error(err); // Log any error to the console
        alert('An error occurred while submitting the form. Please try again.');
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div className="p-3 rounded w-50 border">
        <h3 className="text-center">Add New Driver</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputUserId" className="form-label">
              User ID:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputUserId"
              placeholder="Enter User ID"
              onChange={(e) =>
                setDriver({ ...driver, user_id: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              onChange={(e) =>
                setDriver({ ...driver, name: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address:
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              onChange={(e) =>
                setDriver({ ...driver, address: e.target.value })
              }
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
              placeholder="0761234567"
              onChange={(e) =>
                setDriver({ ...driver, contact_number: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail"
              placeholder="abcde@gmail.com"
              onChange={(e) =>
                setDriver({ ...driver, email: e.target.value })
              }
              required
            />
          </div>
          <div className="col-12 mb-3">
            <label htmlFor="inputImage" className="form-label">
              Select Image:
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              onChange={(e) => setDriver({ ...driver, image: e.target.files[0] })}
              required
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary w-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDriverForm;
