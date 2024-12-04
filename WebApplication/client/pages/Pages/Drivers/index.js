import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../Components/Navbar';
import './index.css';
import SearchBar from '../../Components/SearchBar';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const Drivers = () => {
  const [driver, setDriver] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Use Axios to fetch driver data from backend API
    axios.get('http://localhost:5000/driver/drivers')
      .then(response => {
        setDriver(response.data);  // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching drivers:', error);
      });
  }, []);

  const handleDelete = (d_id) => {
    console.log(`Attempting to delete driver with ID: ${d_id}`); // Log ID to be deleted
    axios.delete(`http://localhost:5000/driver/delete_driver/${d_id}`)
      .then((result) => {
        console.log("Delete result:", result.data); // Log the delete result
        if (result.data.Status) {
          // If the deletion is successful
          setDriver(driver.filter(d => d.d_id !== d_id)); // Update state to reflect deletion
          alert("Driver deleted successfully");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => {
        console.error("Error deleting Driver:", err);
      });
  };

  return (
    <>
      <Navbar />
      <div className="drivers">
        <h1><b>All Drivers in company</b></h1>
        <div className='drivers-searchbar'>
          <SearchBar />
        </div>
        <div className="driver-table-container">
          <div className="driver-table-scroll">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Reg Number</TableCell>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Contact Number</TableCell>
                  <TableCell>Email Address</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {driver.map((d) => (
                  <TableRow key={d.d_id}>
                    <TableCell>{d.regNumber}</TableCell>
                    <TableCell>
                      <img
                        src={`http://localhost:5000/Images/` + d.image}
                        alt=""
                        className="driver_image"
                      />
                    </TableCell>
                    <TableCell>{d.name}</TableCell>
                    <TableCell>{d.address}</TableCell>
                    <TableCell>{d.contact_number}</TableCell>
                    <TableCell>{d.email}</TableCell>
                    <TableCell>
                      <Link
                        to={`/dashboard/edit_employee/` + d.d_id}
                        className="btn btn-info btn-sm me-2"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-warning btn-sm"
                        onClick={() => handleDelete(d.d_id)}
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
      </div>
    </>
  );
};

export default Drivers;