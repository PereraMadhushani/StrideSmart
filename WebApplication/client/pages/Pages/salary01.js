// src/App.js
import React from 'react';
import ProductionForm from './Components/ProductionForm';
import SalaryCalculator from './Components/SalaryCalculator';
import ProductionSlip from './Components/ProductionSlip';

function salary01() {
  return (
    <div className="App">
      <h1>Shoe Production Management</h1>
      <ProductionForm />
      <SalaryCalculator />
      <ProductionSlip />
    </div>
  );
}

export default salary01;
