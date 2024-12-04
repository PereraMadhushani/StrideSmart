import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Alert,
} from '@mui/material';
import axios from 'axios'; // Make sure to import axios
import Navbar from '../../Components/Navbar';

const addProductionData = (data) => axios.post(`http://localhost:5000/salary/production`, data);
const fetchSalary = (regNumber) => axios.get(`http://localhost:5000/salary/salary/${regNumber}`);
const fetchEmployees = () => axios.get(`http://localhost:5000/employee/employees`);
const validateRegNumber = (regNumber) => axios.get(`http://localhost:5000/employee/validate/${regNumber}`);

function SalarySlip() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [productionData, setProductionData] = useState({
    regNumber: "",
    shoe_type: "",
    size: "",
    unit_price: 0,
    quantity: 0,
  });
  const [salary, setSalary] = useState(null);
  const [employees, setEmployees] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    fetchEmployees().then((res) => setEmployees(res.data));
  }, []);

  const handleProductionSubmit = async () => {
    try {
      console.log("Submitting production data:", productionData); 
      const { data } = await validateRegNumber(productionData.regNumber);
      if (!data.valid) {
        alert("Invalid Registration Number. Please enter a valid reg number.");
        return;
      }

      await addProductionData(productionData);
      alert("Production data added successfully!");
      setProductionData({
        regNumber: "",
        shoe_type: "",
        size: "",
        unit_price: 0,
        quantity: 0,
      });
      handleSalaryCalculation(); // Calculate salary after successful submission
    } catch (error) {
      alert("Error adding production data.");
    }
  };

  const handleSalaryCalculation = async () => {
    try {
      const { data } = await fetchSalary(productionData.regNumber);
      setSalary(data.net_salary);
    } catch (error) {
      alert("Error calculating salary.");
    }
  };

  const handleSend = () => {
    setShowMessage(true);
    setTimeout(() => {
      navigate('/salarySlip');
    }, 2000); // Navigate after 2 seconds
  };

  return (
    <Container>
      <Navbar />
      <Typography variant="h4" gutterBottom>Production Data</Typography>
      <TextField
        label="Reg Number"
        value={productionData.regNumber}
        onChange={(e) => setProductionData({ ...productionData, regNumber: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Shoe Type"
        value={productionData.shoe_type}
        onChange={(e) => setProductionData({ ...productionData, shoe_type: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Size"
        type="number"
        value={productionData.size}
        onChange={(e) => setProductionData({ ...productionData, size: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Quantity"
        type="number"
        value={productionData.quantity}
        onChange={(e) => setProductionData({ ...productionData, quantity: e.target.value })}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Unit Price"
        type="number"
        value={productionData.unit_price}
        onChange={(e) => setProductionData({ ...productionData, unit_price: e.target.value })}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleProductionSubmit}>
        Submit Production Data
      </Button>

      {salary !== null && (
        <Box mt={4}>
          <Paper elevation={3}>
            <Box p={3}>
              <Typography variant="h5">Salary Slip</Typography>
              <Typography variant="h6">Registration Number: {productionData.regNumber}</Typography>
              <Typography variant="body1">Net Salary: ${salary.toFixed(2)}</Typography>
            </Box>
          </Paper>
        </Box>
      )}

      {showMessage && <Alert severity="success">Production data submitted successfully!</Alert>}
    </Container>
  );
}

export default SalarySlip;
