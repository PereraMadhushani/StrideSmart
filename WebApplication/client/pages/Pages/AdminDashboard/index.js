import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import WebSocketComponent from '../../Components/WebSocketComponent';
import SearchBar from '../../Components/SearchBar';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableRow, 
  Button, 
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle 
} from '@mui/material';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  // Fetch users from the server
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/admin/users');
        console.log(response.data);
        if (response.data.success && Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error('Expected an array but received:', response.data);
          setUsers([]);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers(); // Fetch users when the component mounts
  }, []);

  // Open dialog for user deletion
  const openDialog = (id) => {
    setSelectedUserId(id);
    setOpen(true);
  };

  // Close dialog
  const closeDialog = () => {
    setOpen(false);
    setSelectedUserId(null);
  };

  // Handle user deletion
  const confirmDelete = async () => {
    if (!selectedUserId) {
      console.error('No user selected for deletion.');
      return;
    }
  
    try {
      const result = await axios.delete(`http://localhost:5000/admin/deleteUser/${selectedUserId}`);
      console.log('Delete result:', result.data);
  
      if (result.data.Status) {
        setUsers(users.filter((u) => u.id !== selectedUserId));
        alert('User deleted successfully');
      } else {
        alert(result.data.Error || 'Failed to delete user.');
      }
    } catch (err) {
      console.error('Error deleting user:', err);
      alert('An error occurred while deleting the user.');
    } finally {
      closeDialog();
    }
  };

  return (
    <>
      <Navbar/>
      <div className="admin-dashboard">
        <h1>Users Management System</h1>
        <WebSocketComponent />
        <div className="top-controls">
          <Link to="/addNewUser" className="add-user">Add New User</Link>
        </div>
        <SearchBar />

        <div className="scrollable-table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reg Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((e) => (
                <TableRow key={e.id}>
                  <TableCell>{e.regNumber}</TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:5000/Images/${e.image}`}
                      alt="User"
                      className="employee_image"
                    />
                  </TableCell>
                  <TableCell>{e.address}</TableCell>
                  <TableCell>{e.contact_number}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => openDialog(e.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Dialog open={open} onClose={closeDialog}>
          <DialogTitle>Confirm Delete</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={closeDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={confirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default AdminDashboard;
