import React, { useState } from 'react';
import Navbar from '../../Components/Navbar'; // Import the NavBar component
import './index.css';
import { useTranslation } from 'react-i18next';

const SalaryCalc = () => {
  const [role, setRole] = useState('Upper Case');
  const [month, setMonth] = useState('January');

  return (
    <div className="salary-slip-container">
      {/* Include NavBar component */}
      <Navbar />

      <section className="employee-details">
        <div className="employee-info">
          <div>
            <label>Employee ID:</label>
            <input type="text" />
          </div>
          <div>
            <label>Employee Name:</label>
            <input type="text" />
          </div>
        </div>
        <div className="employee-info">
          <div>
            <label>Role:</label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="Upper Case">Upper Case</option>
              <option value="Lower Case">Lower Case</option>
            </select>
          </div>
          <div>
            <label>Month:</label>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              {/* Add more months */}
            </select>
          </div>
        </div>
        <div className="employee-info">
          <div>
            <label>Bank Name:</label>
            <input type="text" />
          </div>
          <div>
            <label>Bank Account:</label>
            <input type="text" />
          </div>
        </div>
      </section>

      <section className="salary-details">
        <table className="salary-table">
          <thead>
            <tr>
              <th>Shoe Size</th>
              <th>Quantity</th>
              <th>Unit Price (Rs.)</th>
              <th>Total (Rs.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
              <td><input type="number" /></td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>

        <div className="net-salary">
          <label>Net Salary (Rs.):</label>
          <input type="text" />
        </div>

        <div className="action-buttons">
          <button className="download-btn">Download PDF</button>
          <button className="send-btn">Send to Employee</button>
        </div>
      </section>
    </div>
  );
};

export default SalaryCalc;
