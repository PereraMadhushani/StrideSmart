import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import './index.css';
import SearchBar from '../../Components/SearchBar';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const EmployeeManagementSystem = () => {
  const [employee, setEmployee] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Use Axios to fetch employee data from backend API
    axios.get('http://localhost:5000/employee/employees')
        .then(response => {
            setEmployee(response.data);  // Update state with fetched data
        })
        .catch(error => {
            console.error('Error fetching employees:', error);
        });
  }, []);

  // Function to handle employee deletion
  const handleDelete = (e_id) => {
    console.log(`Attempting to delete employee with ID: ${e_id}`); // Log ID to be deleted
    axios.delete(`http://localhost:5000/employee/delete_employee/${e_id}`)
      .then((result) => {
        console.log("Delete result:", result.data); // Log the delete result
        if (result.data.Status) {
          // If the deletion is successful
          setEmployee(prevEmployees => prevEmployees.filter(e => e.e_id !== e_id));
          alert("Employee deleted successfully");
        } else {
          console.error("Delete failed:", result.data.Error);
          alert(result.data.Error || "Failed to delete employee.");
        }
      })
      .catch((err) => {
        console.error("Error deleting employee:", err);
        alert("An error occurred while deleting the employee. Please try again.");
      });
  };

  return (
    <>
      <Navbar />
      <div className="employee-management-system h1">
        <h1>All Employee in company</h1>
        
        <div className='search3'>
          <SearchBar /> 
        </div>
        <div className="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reg Number</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Email Address</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employee.map((e) => (
                <TableRow key={e.e_id}>
                  <TableCell>{e.regNumber}</TableCell>
                  <TableCell>
                    <img
                      src={`http://localhost:5000/Images/` + e.image}
                      alt=""
                      className="employee_image"
                    />
                  </TableCell>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.address}</TableCell>
                  <TableCell>{e.contact_number}</TableCell>
                  <TableCell>{e.email}</TableCell>
                  <TableCell>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => handleDelete(e.e_id)}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default EmployeeManagementSystem;