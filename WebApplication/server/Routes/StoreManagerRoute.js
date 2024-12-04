import express from 'express';
import con from '../Utils/db.js'; // Ensure this is your correct DB connection
import multer from 'multer';
import path from 'path';

const router = express.Router();


export function sManagerRouter(io) {

// Fetch material requests
router.get('/newRequest', (req, res) => {
  const query = 'SELECT * FROM request_material WHERE status="Pending"'; // Adjust the query to match your database schema

  con.query(query, (error, results) => {
    if (error) {
      console.error('Error fetching material requests:', error);
      return res.status(500).json({ error: 'Error fetching material requests' });
    }

    if (!Array.isArray(results)) {
      console.error('Expected results to be an array');
      return res.status(500).json({ error: 'Unexpected result format' });
    }

    res.json(results);
  });
});

// Add this route in your backend code
router.put('/updateStatus/:id', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    const query = 'UPDATE request_material SET status = ? WHERE id = ?';
  
    con.query(query, [status, id], (error, results) => {
      if (error) {
        console.error('Error updating status:', error);
        return res.status(500).json({ error: 'Error updating status' });
      }
  
      // Simulate sending a message to the manager
      const notificationMessage =
        status === 'Accepted'
          ? `Request ID ${id} has been accepted. Materials are delivered.`
          : `Request ID ${id} has been rejected. Materials are unavailable.`;
  
      // Replace this with your actual notification service (e.g., email or SMS)
      console.log(`Sending notification to manager: ${notificationMessage}`);
  
      res.status(200).json({ message: 'Status updated successfully and notification sent.' });
    });
  });
  
  

return router;
}

