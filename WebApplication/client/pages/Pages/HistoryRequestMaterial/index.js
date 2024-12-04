import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar';
import './index.css';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const HistoryRequestMaterial = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  const handleAddClick = () => {
    navigate('/newRequest');
  };

  useEffect(() => {
    // Use Axios to fetch employee data from backend API
    axios.get('http://localhost:5000/material/newRequest')
      .then(response => {
        setHistory(response.data);  // Update state with fetched data
      })
      .catch(error => {
        console.error('Error fetching employees:', error);
      });
  }, []);

  const handleDetailsClick = (id) => {
    alert(`See details for ${id}`);
  };

  return (
    <div className="history-request-material-container">
      <h1 className='History-h1'><b>History of Request Material</b></h1>
      <div>
        <IconButton onClick={handleAddClick} className="add-button1">
          <AddIcon />
        </IconButton>
      </div>
      <SearchBar />
      <section className="history-content">
        <div className="material-table-container">
          <div className="material-table-scroll">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Reg Number</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>DriverId</TableCell>
                  <TableCell>Raw Material</TableCell>
                  <TableCell>Required Date</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {history.map((e) => (
                  <TableRow key={e.index}>
                    <TableCell>{e.regNumber}</TableCell>
                    <TableCell>{e.name}</TableCell>
                    <TableCell>{e.driverId}</TableCell>
                    <TableCell>{e.rawMaterial}</TableCell>
                    <TableCell>{new Date(e.requiredDate).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <button className="details-btn" onClick={() => handleDetailsClick(e.id)}>See Details</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryRequestMaterial;