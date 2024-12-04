import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import BackButton from '../../../Components/BackButton'; // Correctly import BackButton
import "./index.css";

function OrderForm() {
  const [formData, setFormData] = useState({
    regNumber: "",
    date: "",
    dueDate: "",
    qty: "",
    unitPrice: ""
  });

  const [error, setError] = useState(null); // For error handling
  const [isValidRegNumber, setIsValidRegNumber] = useState(true); // Track regNumber validation
  const navigate = useNavigate(); // Initialize useNavigate

  // Set the current date as default on component mount
  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD
    setFormData((prevData) => ({
      ...prevData,
      date: today
    }));
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    // Trigger validation for regNumber
    if (name === "regNumber") {
      validateRegNumber(value);
    }
  };

  // Validate regNumber with the backend
  const validateRegNumber = async (regNumber) => {
    try {
      const response = await axios.get(`http://localhost:5000/order/validateRegNumber/${regNumber}`);
      setIsValidRegNumber(response.data.isValid);

      if (!response.data.isValid) {
        setError("Invalid Employee ID. Please enter a valid ID from the employee table.");
      } else {
        setError(null); // Clear error if regNumber is valid
      }
    } catch (error) {
      console.error("Error validating regNumber:", error);
      setError("Error validating Employee ID. Please try again.");
    }
  };

  // Validate form inputs
  const validateInputs = () => {
    const { regNumber, date, dueDate, qty, unitPrice } = formData;

    if (!isValidRegNumber) {
      return "Invalid Employee ID.";
    }

    if (!regNumber || !date || !dueDate || !qty || !unitPrice) {
      return "All fields are required.";
    }
    if (isNaN(qty) || qty <= 0) {
      return "Quantity must be a positive number.";
    }
    if (isNaN(unitPrice) || unitPrice <= 0) {
      return "Unit Price must be a positive number.";
    }
    if (new Date(dueDate) < new Date(date)) {
      return "Due Date cannot be earlier than the Order Date.";
    }

    return null; // No errors
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateInputs();
    if (validationError) {
      setError(validationError); // Show validation error
      return;
    }

    try {
      // Send form data to the backend
      await axios.post('http://localhost:5000/order/orders', formData);

      // Navigate back to the order table
      navigate('/order');
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setError("Failed to add the order. Please try again.");
    }
  };

  return (
    <div className="order-form">
      <BackButton />
      <h2>Add New Order</h2>
      {error && <div className="error-message">{error}</div>} {/* Display error message */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="regNumber">Employee ID:</label>
          <input
            type="text"
            id="regNumber"
            name="regNumber"
            value={formData.regNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="qty">Quantity:</label>
          <input
            type="number"
            id="qty"
            name="qty"
            value={formData.qty}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="unitPrice">Unit Price:</label>
          <input
            type="number"
            id="unitPrice"
            name="unitPrice"
            value={formData.unitPrice}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn" disabled={!isValidRegNumber}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default OrderForm;
