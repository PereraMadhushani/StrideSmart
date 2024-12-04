import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Button, TextField } from '@mui/material';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import BackButton from '../../Components/BackButton'; // Correctly import BackButton


const LeaveForm = () => {
    const { leave_id } = useParams(); // Extract leave_id from URL
    const navigate = useNavigate();
    const [leaveData, setLeaveData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch leave details
        const fetchLeaveDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/leave/leave/${leave_id}`);
                setLeaveData(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching leave details:', error);
                setLoading(false);
            }
        };

        fetchLeaveDetails();
    }, [leave_id]);

    // const handleUpdateLeave = async () => {
    //   try {
    //     const response = await axios.post('http://localhost:5000/leave/update', {
    //       leave_id,
    //       status: 'Approved', // Update as needed (Approved/Rejected)
    //     });
    //     alert(response.data.Message);
    //   } catch (error) {
    //     console.error('Error updating leave:', error);
    //   }
    // };
    const handleApprove = async () => {
      try {
        const response = await axios.post('http://localhost:5000/leave/update', {
          leave_id,
          status: 'Approved',
        });
        alert(response.data.Message);
        navigate('/leave01'); // Redirect to Leave Management System
      } catch (error) {
        console.error('Error approving leave:', error);
      }
    };
  
    const handleReject = async () => {
      try {
        const response = await axios.post('http://localhost:5000/leave/update', {
          leave_id,
          status: 'Rejected',
        });
        alert(response.data.Message);
        navigate('/leave01'); // Redirect to Leave Management System
      } catch (error) {
        console.error('Error rejecting leave:', error);
      }
    };
  
    if (!leaveData) {
      return <div>Loading...</div>;
    }

//     return (
//       <>
//         <div className="leave-application-container">
//           <div className="leave-card">
//             <h2>Leave Application</h2>
//             <div className="leave-field">
//               <label>Employee Name:</label>
//               <span>{leaveDetails.regNumber}</span>
//             </div>
//             <div className="leave-field">
//               <label>From Leave:</label>
//               <span>{new Date(leaveDetails.from_date).toLocaleDateString()}</span>
//             </div>
//             <div className="leave-field">
//               <label>To Leave:</label>
//               <span>{new Date(leaveDetails.to_date).toLocaleDateString()}</span>
//             </div>
//             <div className="leave-field">
//               <label>Duration:</label>
//               <span>{leaveDetails.duration}</span>
//             </div>
//             <div className="leave-field">
//               <label>Status:</label>
//               <span>{leaveDetails.status}</span>
//             </div>
//             <div className="button-group">
//             <Button variant="contained" onClick={handleUpdateLeave}>
//               Update Status
//             </Button>
//             </div>
//           </div>
//         </div>
//       </>
//     );
// };

return (
  <>
    <Navbar />
    <div className="leave-application-container">
    
      <div className="leave-card">
      <BackButton />
        <h2>Leave Application</h2>
        <div className="leave-field">
          <label>Employee Name:</label>
          <span>{leaveData.regNumber}</span> {/* Replace with dynamic data */}
        </div>

        <div className="leave-field">
          <label>From Leave</label>
          <span>{new Date(leaveData.from_date).toLocaleDateString()}</span> {/* Replace with dynamic data */}
        </div>
      
       
        <div className="leave-field">
          <label>To Leave:</label>
          <span>{new Date(leaveData.to_date).toLocaleDateString()}</span> {/* Replace with dynamic data */}
        </div>
        <div className="leave-field">
          <label>Duration:</label>
          <span>{leaveData.duration}</span> {/* Replace with dynamic data */}
        </div>
        <div className="leave-field">
          <label>Status:</label>
          <span>{leaveData.status}</span> {/* Replace with dynamic data */}
        </div>
        <p className="action-msg">Please take an appropriate action.</p>
        <div className="button-group">
          <button className="approve-btn" onClick={handleApprove}>Approve</button>
          <button className="reject-btn" onClick={handleReject}>Reject</button>
        </div>
      </div>
    </div>
  </>
);
};

export default LeaveForm;
