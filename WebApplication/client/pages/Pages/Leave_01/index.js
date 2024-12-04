import React, { useState, useEffect } from 'react';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './index.css';
import Navbar from '../../Components/Navbar';
import { io } from 'socket.io-client';
import axios from 'axios';
import SearchBar from '../../Components/SearchBar';

const LeaveManagementSystem = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');
  const [newLeave, setNewLeave] = useState({
    regNumber: '',
    from_date: '',
    to_date: '',
    duration: '',
    status: '',
  });

  // Fetch leaves function
  const fetchLeaves = async (status) => {
    try {
      const response = await axios.get('http://localhost:5000/leave/leave/:leave_id', {
        params: { status },
      });
      const sortedLeaves = response.data.sort((a, b) => new Date(b.from_date) - new Date(a.from_date));
      setData(sortedLeaves);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  // Initial data fetching and WebSocket setup
  useEffect(() => {
    const socket = io('http://localhost:5000'); // Backend server URL

    fetchLeaves(filter); // Fetch leaves based on the initial filter

    // Listen for WebSocket updates
    socket.on('leaveStatusUpdated', (update) => {
      setData((prevData) =>
        prevData.map((item) =>
          item.leave_id === update.leave_id ? { ...item, status: update.status } : item
        )
      );
    });

    socket.on('disconnect', () => {
      console.log('WebSocket connection disconnected');
    });

    return () => {
      socket.off('leaveStatusUpdated');
      socket.off('disconnect');
    };
  }, [filter]);

  const handleAddOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/leave/apply', newLeave);
      if (response.status === 201) {
        setData([response.data, ...data]); // Prepend the new order to the existing orders
        setNewLeave({
          regNumber: '',
          from_date: '',
          to_date: '',
          duration: '',
          status: '',
        });
      }
    } catch (error) {
      console.error('Error adding new order:', error);
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="Leave-Management-System-h1">
          Leave Management System
        </h1>
        <div className="Searchbar-leave">
          <SearchBar />
        </div>
        <div className="filter-buttons">
          <Button variant="contained" onClick={() => setFilter('')}>
            All
          </Button>
          <Button variant="contained" color="primary" onClick={() => setFilter('Rejected')}>
            Rejected
          </Button>
          <Button variant="contained" color="secondary" onClick={() => setFilter('Approved')}>
            Approved
          </Button>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Applied By</TableCell>
              <TableCell>Applied On</TableCell>
              <TableCell>On Leave</TableCell>
              <TableCell>Duration</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.leave_id}>
                <TableCell>{item.regNumber}</TableCell>
                <TableCell>
                  {isNaN(new Date(item.from_date)) ? 'Invalid Date' : new Date(item.from_date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {isNaN(new Date(item.to_date)) ? 'Invalid Date' : new Date(item.to_date).toLocaleDateString()}
                </TableCell>
                <TableCell>{item.duration}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/leaveForm/${item.leave_id}`} // Pass the leave_id as a parameter
                    style={{
                      marginLeft: '10px',
                      backgroundColor: '#1976d2',
                      color: '#fff',
                    }}
                  >
                    Action
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </>
  );
};

export default LeaveManagementSystem;
