import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import BackButton from '../../Components/BackButton'; // Correct BackButton spelling

const NewRequest = () => {
    const [error, setError] = useState('');
    const [date, setDate] = useState('');
    const [regNumber, setRegNumber] = useState('');
    const [name, setName] = useState('');
    const [driverId, setDriverId] = useState('');
    const [rawMaterial, setRawMaterial] = useState('');
    const [requiredDate, setRequiredDate] = useState('');
    const [regNumberError, setRegNumberError] = useState(''); // Error for regNumber
    const [driverIdError, setDriverIdError] = useState(''); // Error for driverId
    const navigate = useNavigate(); // Initialize useNavigate
    
     // Fetch the current date when the component mounts
     useEffect(() => {
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        setDate(currentDate);
    }, []);

     // Fetch the employee name based on regNumber
     useEffect(() => {
        if (regNumber) {
            const fetchEmployeeName = async () => {
                try {
                    const response = await axios.get(`http://localhost:5000/material/validateRegNumber/${regNumber}`);
                    if (response.data.isValid) {
                        // If regNumber is valid, fetch employee name
                        const nameResponse = await axios.get(`http://localhost:5000/material/employeeName/${regNumber}`);
                        setName(nameResponse.data.name); // Set employee name
                    } else {
                        setName('');
                    }
                } catch (error) {
                    console.error("Error fetching employee name:", error);
                }
            };

            fetchEmployeeName();
        } else {
            setName('');
        }
    }, [regNumber]);

    // Validate regNumber and driverId
    const validateRegNumberAndDriverId = async (regNumber, driverId) => {
        try {
            // Validate regNumber (Employee table)
            const regNumberResponse = await axios.get(`http://localhost:5000/material/validateRegNumber/${regNumber}`);
            if (!regNumberResponse.data.isValid) {
                setRegNumberError("Invalid reg number. Please enter a valid reg number from the employee table.");
                return false;
            }

            // Validate driverId (Driver table)
            const driverIdResponse = await axios.get(`http://localhost:5000/material/validateDriverId/${driverId}`);
            if (!driverIdResponse.data.isValid) {
                setDriverIdError("Invalid driver ID. Please enter a valid driver ID.");
                return false;
            }

            // Clear errors if both are valid
            setRegNumberError('');
            setDriverIdError('');
            return true;
        } catch (error) {
            console.error("Error validating data:", error);
            setError("Error validating regNumber and driverId. Please try again.");
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate regNumber and driverId
        const isValid = await validateRegNumberAndDriverId(regNumber, driverId);
        if (!isValid) return;
        
        const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
        if (requiredDate <= currentDate) {
        alert('Required Date must be greater than the current date.');
        return;
    }
        try {
            const response = await axios.post('http://localhost:5000/material/newRequest', {
                date,
                regNumber,
                name,
                driverId,
                rawMaterial,
                requiredDate
            });
            alert(response.data.message);
            navigate('/historyRequestMaterial');
        } catch (error) {
            console.error('Error submitting request:', error);
            alert('Failed to submit request.');
        }
    };

    return (
        <div className="request-form-container">
            {/* Include NavBar component */}
            <Navbar />

            <section className="request-form">
                <BackButton />
                <h2 className="form-title">New Request</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Date:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div>
                        <label>Employee ID:</label>
                        <input 
                            type="text" 
                            value={regNumber} 
                            onChange={(e) => setRegNumber(e.target.value)} 
                            required 
                        />
                        {regNumberError && <div className="error-message">{regNumberError}</div>} {/* Show regNumber error */}
                    </div>
                    <div>
                        <label>Employee Name:</label>
                        <input 
                            type="text" 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            required
                            disabled // Disable the field as it's auto-filled
                        />
                    </div>
                    <div>
                        <label>Driver ID:</label>
                        <input 
                            type="text" 
                            value={driverId} 
                            onChange={(e) => setDriverId(e.target.value)} 
                            required 
                        />
                        {driverIdError && <div className="error-message">{driverIdError}</div>} {/* Show driverId error */}
                    </div>
                    <div>
                        <label>Raw Material:</label>
                        <input 
                            type="text" 
                            value={rawMaterial} 
                            onChange={(e) => setRawMaterial(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Required Date:</label>
                        <input 
                            type="date" 
                            value={requiredDate} 
                            onChange={(e) => setRequiredDate(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Submit Request</button>
                </form>
            </section>
        </div>
    );
};

export default NewRequest;
