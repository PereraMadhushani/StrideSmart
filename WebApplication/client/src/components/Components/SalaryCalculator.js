// src/components/SalaryCalculator.js
import React, { useState } from 'react';
import axios from 'axios';

const SalaryCalculator = () => {
  const [regNumber, setRegNumber] = useState('');
  const [salary, setSalary] = useState(null);

  const calculateSalary = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/salary/${regNumber}`);
      setSalary(response.data.netSalary);
    } catch (error) {
      alert('Error calculating salary');
    }
  };

  return (
    <div>
      <input type="text" placeholder="Reg Number" value={regNumber} onChange={(e) => setRegNumber(e.target.value)} />
      <button onClick={calculateSalary}>Calculate Salary</button>
      {salary !== null && <p>Net Salary: ${salary}</p>}
    </div>
  );
};

export default SalaryCalculator;
