import React, { useState, useEffect } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@mui/material';

const OrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(''); // "Pending" or "Completed"
  const [open, setOpen] = useState(false); // For the Add Order dialog
  const [newOrder, setNewOrder] = useState({
    regNumber: '',
    date: '',
    dueDate: '',
    qty: '',
    unitPrice: '',
  });

  const fetchOrders = async (status) => {
    try {
      const response = await axios.get('http://localhost:5000/order/orders', {
        params: { status }, // Pass status as a query parameter
      });
      const sortedOrders = response.data.sort((a, b) => new Date(b.date) - new Date(a.date));
      setOrders(sortedOrders);
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };
  // Handle form submission for adding a new order
  const handleAddOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/order/orders', newOrder);
      if (response.status === 200) {
        setOrders([response.data, ...orders]); // Prepend the new order to the existing orders
        setOpen(false); // Close the dialog
        setNewOrder({
          regNumber: '',
          date: '',
          dueDate: '',
          qty: '',
          unitPrice: '',
        }); // Reset the form
      }
    } catch (error) {
      console.error('Error adding new order:', error);
    }
  };


  useEffect(() => {
    fetchOrders(filter);
  }, [filter]);

  return (
    <div className="order-page">
      <h1><b>All details about orders</b></h1>
      <div className="filter-buttons">
        <Button variant="contained" onClick={() => setFilter('')}>All</Button>
        <Button variant="contained" color="primary" onClick={() => setFilter('Pending')}>Pending</Button>
        <Button variant="contained" color="secondary" onClick={() => setFilter('Completed')}>Completed</Button>
      </div>

      

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reg Number</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Due Date</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow key={index}>
              <TableCell>{order.regNumber}</TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString()}</TableCell>
              <TableCell>{new Date(order.dueDate).toLocaleDateString()}</TableCell>
              <TableCell>{order.qty}</TableCell>
              <TableCell>{order.unitPrice}</TableCell>
              <TableCell>{order.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Link to="/addOrder" className="add-order-button">+</Link>
    </div>
  );
};

export default OrderPage;
