import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import SearchBar from '../../Components/SearchBar';
import axios from 'axios';
import './index.css';

const SalaryMain = () => {
  const [salaryData, setSalaryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleRegNumberClick = (regNumber) => {
    navigate(`/salarySlip/${regNumber}`); // Assuming you want to navigate with the regNumber
  };

  // Fetch salary data from the backend
  const fetchSalaryData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/salary/salarySlip'); 
      if (response.status !== 200) {
        throw new Error('Failed to fetch salary data');
      }
      const data = response.data; 
      setSalaryData(data);
    } catch (error) {
      console.error('Error fetching salary data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSalaryData();
  }, []);

  return (
    <div className="salary-page">
      
      <div className='salary-Slip-container'>
        <h1 className='salary-h1'><b>Salary Details</b></h1>
        <div className='salary-search'><SearchBar /></div>
        
        <div className="salary-table-scroll">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Reg Number</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Month</TableCell>
                <TableCell>Salary</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salaryData.map((employee) => (
                <TableRow key={employee.regNumber}>
                  <TableCell>
                    <Button
                      variant="text"
                      color="primary"
                      onClick={() => handleRegNumberClick(employee.regNumber)}
                    >
                      {employee.regNumber}
                    </Button>
                  </TableCell>
                  <TableCell>{employee.regNumber}</TableCell>
                  <TableCell>{employee.month}</TableCell>
                  <TableCell>{employee.netSalary}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Button variant="contained" sx={{ backgroundColor: '#D9D9D9', color: 'black' }}>
            Previous
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default SalaryMain;