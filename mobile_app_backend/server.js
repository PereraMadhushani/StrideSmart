const express = require('express');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const subordinateRoutes = require('./routes/subordinateRoutes');
const orderRoutes = require('./routes/orderRoutes');
const leaveRoutes = require('./routes/leaveRoutes');
const orderStatusRoutes = require('./routes/orderStatusRoutes');





app.use('/api', authRoutes);
app.use('/api', subordinateRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/', leaveRoutes);
app.use('/api', orderStatusRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error' 
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});