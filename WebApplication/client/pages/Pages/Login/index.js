import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
//import bgImage from '../../assets/images/background.jpg'; // Background image
import './index.css';

const Login = () => {
    const navigate = useNavigate(); // For navigation after login
    const [values, setValues] = useState({
        regNumber: '', // Updated to match backend expectations
        password: ''
    });
    const [error, setError] = useState('');

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
    
        try {
            const res = await axios.post('http://localhost:5000/login/login', {
                regNumber: values.regNumber,
                password: values.password
            });
    
            if (res.data.message) {
                const userRole = res.data.user.role; // Get the user's role from the backend

                // Navigate to the appropriate dashboard based on the role
                if (userRole === 'admin') {
                    navigate('/adminDashboard');
                } else if (userRole === 'manager') {
                    navigate('/dashboard');
                } else if (userRole === 'storemanager') {
                    navigate('/storemanagerDashboard');
                } else {
                    navigate('/dashboard'); // Fallback for other roles
                }
            } else {
                setError('Login failed. Please check your registration number and password.');
            }
        } catch (err) {
            console.log('Axios Error:', err.response ? err.response.data : err.message); // Log error details
            setError('An error occurred during login.'); // Update error state
        }
    };
    return (
        /*<div className='body-background' style={{ backgroundImage: `url(${bgImage})` }}>*/
            
                <div className='login-container'>
                    <div className='p-5 rounded w-50 d-flex' style={{ backgroundColor: '#cccccc00' }}>
                        <div className='w-50 pr-3'>
                            {/* Logo and Heading Section */}
                            <div className='mb-4 text-center'>
                                <img src={logo} alt="Stride Smart Logo" style={{ width: '70px' }} />
                                <h3 className='h3'><b>Stride Smart</b></h3>
                            </div>
                            <h2 className='mb-4 custom-heading'>LOG IN</h2>
                            {error && <div className="text-warning">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className='mb-3'>
                                    <label htmlFor='user_id'><strong>Reg Number:</strong></label>
                                    <input
                                        type="id"
                                        name="regNumber"
                                        autoComplete='off'
                                        placeholder='Enter User ID'
                                        onChange={(e) => setValues({ ...values, regNumber: e.target.value })}
                                        className='form-control rounded-0'
                                    required/>
                                </div>
                                <div className='mb-3'>
                                    <label htmlFor='password'><strong>Password:</strong></label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder='Enter Password'
                                        onChange={(e) => setValues({...values, password: e.target.value })}
                                        className='form-control rounded-0'
                                    />
                                </div>
                                <button className='btn btn-success w-100 rounded-0 mb-2'>Log in</button>

                                <div className='mb-1'>
                                    <input type="checkbox" name="tick" id="tick" className='me-2' required/>
                                    <label htmlFor='tick'>You agree with terms & conditions</label>
                                </div>
                                <Link to='/forgotPassword' className='forgot-password-link'>Forgot Password?</Link>
                            </form>
                        </div>
                        <div className='w-50 pl-3' style={{ border: 'none' }}>
                            {/* Additional content can go here */}
                        </div>
                    </div>
                </div>
            
        
    );
}

export default Login;
