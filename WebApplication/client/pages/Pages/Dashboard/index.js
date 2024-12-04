import React, { useState } from 'react';
import './index.css';
import Navbar from '../../Components/Navbar';
import { useTranslation } from 'react-i18next';
import { FcAreaChart, FcCollaboration, FcShipped, FcAcceptDatabase, FcOvertime, FcDebt, FcBusiness } from 'react-icons/fc';
import { Routes, Route } from 'react-router-dom';

// Import components
import SeePerformance from '../SeePerformance';
import EmployeeManagementSystem from '../EmployeeManagement';
import AboutDrivers from '../Drivers';
import LeaveManagement from '../Leave_01'; 
import CalculateSalary from '../SalaryMain'; 
import RequestMaterial from '../HistoryRequestMaterial'; 
import Order from '../Order';
import NewRequest from '../NewRequest'; // Import NewRequest component

const Dashboard = () => {
  const { t } = useTranslation();

  const items = [
    { id: 6, title: t('See Performance'), component: <SeePerformance />, icon: <FcAreaChart /> },
    { id: 3, title: t('Employee Management'), component: <EmployeeManagementSystem />, icon: <FcCollaboration /> },
    { id: 7, title: t('Drivers'), component: <AboutDrivers />, icon: <FcShipped /> },
    { id: 1, title: t('Order'), component: <Order />, icon: <FcAcceptDatabase /> }, 
    { id: 2, title: t('Leave Management'), component: <LeaveManagement />, icon: <FcOvertime /> }, 
    { id: 4, title: t('Calculate Salary'), component: <CalculateSalary />, icon: <FcDebt /> },
    { id: 5, title: t('Request Material'), component: <RequestMaterial />, icon: <FcBusiness /> },
  ];

  // Set the initial state to the item corresponding to SeePerformance
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <Sidebar items={items} selectedItem={selectedItem} setSelectedItem={handleItemClick} />
        <div className="dashboard-content">
          <Routes>
            <Route path="/" element={selectedItem.component} />
            <Route path="newRequest" element={<NewRequest />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

const Sidebar = ({ items, selectedItem, setSelectedItem }) => {
  return (
    <div className="sidebar">
      <b>Stride Smart</b>
      <ul className="sidebar-list">
        {items.map((item) => (
          <li key={item.id} className={`sidebar-item ${selectedItem.id === item.id ? 'active' : ''}`}>
            <button onClick={() => setSelectedItem(item)} className="sidebar-button">
              {item.icon && <span className="sidebar-icon">{item.icon}</span>}
              {item.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Default content to show when no item is selected
const DefaultContent = () => {
  const { t } = useTranslation();
  return <h2>{t('welcomeMessage')}</h2>;
};

export default Dashboard;