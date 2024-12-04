import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard";
import Drivers from './Pages/Drivers';
import DriversDetails from './Pages/DriversDetails';
import EmployeeManagement from './Pages/EmployeeManagement';
import Home from './Pages/Home';
import Leave_01 from './Pages/Leave_01';
import LeaveForm from './Pages/LeaveForm';
import Login from './Pages/Login';
import Settings from "./Components/Navbar/Settings";
import SalaryMain from './Pages/SalaryMain';
import Salary from './Pages/SalaryMain/Salary';
import SeePerformance from './Pages/SeePerformance';
import HistoryRequestMaterial from './Pages/HistoryRequestMaterial';
import NewRequest from './Pages/NewRequest';
import Notification from './Pages/Notifications';
import SalaryCalc from './Pages/SalaryCalc';
import SalarySlip from './Pages/SalarySlip';
import Order from "./Pages/Order";
import AddOrderPage from "./Pages/Order/AddOrderPage";
import ForgotPassword from "./Pages/Login/ForgotPassword";
import OtpVerification from "./Pages/Login/OtpVerification";
import SetNewPassword from "./Pages/Login/SetNewPassword";
import AddNewUser from "./Pages/AdminDashboard/AddNewUser";
import StoreManagerDashboard from './Pages/StoreManager/StoreManagerDashboard';
import AdminDashboard from './Pages/AdminDashboard';

import './App.css';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employeeManagement" element={<EmployeeManagement />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/driversDetails" element={<DriversDetails />} />
        <Route path="/seePerformance" element={<SeePerformance />} />
        <Route path="/salaryMain" element={<SalaryMain />} />
        <Route path="/salary" element={<Salary />} />
        <Route path="/leave01" element={<Leave_01 />} />
        <Route path="/leaveForm/:leave_id" element={<LeaveForm />} />
        <Route path="/historyRequestMaterial" element={<HistoryRequestMaterial />} />
        <Route path="/newRequest" element={<NewRequest />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/salaryCalc" element={<SalaryCalc />} />
        <Route path="/salarySlip" element={<SalarySlip />} />
        <Route path="/settings/:id" element={<Settings />} />
        <Route path="/order" element={<Order />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/otpVerification" element={<OtpVerification />} />
        <Route path="/setNewPassword" element={<SetNewPassword />} />
        <Route path="/addNewUser" element={<AddNewUser />} />
        <Route path="/storeManagerDashboard" element={<StoreManagerDashboard />} />
        <Route path="/addOrder" element={<AddOrderPage />} />
        <Route path="/adminDashboard" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
