import DownloadIcon from '@mui/icons-material/Download';
import SendIcon from '@mui/icons-material/Send';
import { useParams } from 'react-router-dom';
import Navbar from '../../../Components/Navbar';
//import bgImage from '../../../assets/images/loging-bg.jpg'; 
import SearchBar from '../../../Components/SearchBar';
import {
  Box,
  Button,
  Container,
  IconButton,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { styled } from '@mui/system';
import React, { useState } from 'react';
import './index.css'; // Importing the CSS file

const ContentContainer = styled(Container)({
  backgroundColor: '#ffebee',
  padding: '20px',
  marginTop: '64px',
});

const Salary = () => {
  const { id } = useParams();

  const [salaryData, setSalaryData] = useState([
    { id: '001', name: 'John Doe', month: 'January', netSalary: 5000 },
    { id: '002', name: 'Jane Smith', month: 'February', netSalary: 5500 },
    // Add more sample data as needed
  ]);

  const handleDownloadPdf = (id) => {
    // Implement PDF download logic
    console.log(`Downloading PDF for employee ID: ${id}`);
  };

  const handleSendToEmployee = (id) => {
    // Implement send to employee logic
    console.log(`Sending to employee ID: ${id}`);
  };

  return (
    <>
      <Navbar/>
      <ContentContainer>
        <Typography variant="h4" gutterBottom className="title">
          Salary Slip
        </Typography>
        <SearchBar/>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>EMP. ID</TableCell>
                <TableCell>EMP. NAME</TableCell>
                <TableCell>SALARY MONTH</TableCell>
                <TableCell>NET SALARY</TableCell>
                <TableCell>ACTION</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {salaryData.map((employee) => (
                <TableRow key={employee.id}>
                  <TableCell>{employee.id}</TableCell>
                  <TableCell>{employee.name}</TableCell>
                  <TableCell>{employee.month}</TableCell>
                  <TableCell>{employee.netSalary}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDownloadPdf(employee.id)}>
                      <DownloadIcon />
                    </IconButton>
                    <IconButton onClick={() => handleSendToEmployee(employee.id)}>
                      <SendIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
          <Button variant="contained" className="previous-btn">Previous</Button>
          <Pagination count={10} variant="outlined" shape="rounded" />
          <Button variant="contained" className="next-btn">Next</Button>
        </Box>
      </ContentContainer>
    </>
  );
};

export default Salary;
