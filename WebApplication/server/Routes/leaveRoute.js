import express from 'express';
import con from '../Utils/db.js'; // Ensure this is your correct DB connection
import { io } from '../index.js';

const router = express.Router();

export const leaveRouter = (io) => {
  router.post('/apply', (req, res, next) => {
    console.log("leave function are called");
    const { regNumber, leaveType, from_date, to_date, duration } = req.body;

    if (!regNumber || !leaveType || !from_date || !to_date || !duration) {
        console.log('Validation failed: Missing fields');
        return res.status(400).send({ message: 'All fields are required.' });
    }

    const query = 'INSERT INTO leaverequest (regNumber, leaveType, from_date, to_date, duration, status) VALUES (?, ?, ?, ?, ?, "Pending")';

    con.query(query, [regNumber, leaveType, from_date, to_date, duration], (err, result) => {
        if (err) {
            console.error('Database Error:', err);
            return next(err); // Pass error to next middleware
        }

        if (result && result.insertId) {
            console.log('Insert successful:', result);
            io.emit('leaveApplied', { leave_id: result.insertId, regNumber: regNumber, status: 'Pending' });
            return res.status(201).send({ message: 'Leave applied successfully', leave_id: result.insertId });
        } else {
            console.log('Unexpected insert result:', result);
            return res.status(500).send({ message: 'Failed to apply for leave.' });
        }
    });
});

  router.get('/leave/:leave_id', (req, res, next) => {
  const { leave_id } = req.params;
  const { status } = req.query;

  let query = `
    SELECT lr.*, u.regNumber AS appliedBy 
    FROM leaverequest lr
    JOIN user u ON lr.regNumber = u.regNumber`;

  if (status) {
    query += ` WHERE lr.status = ?`;
  }

  con.query(query, [status], (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return next(err);
    }
    res.send(results);
  });
});

      router.post('/update', async (req, res, next) => {
        const { leave_id, status } = req.body;
        const query = 'UPDATE leaverequest SET status = ? WHERE leave_id = ?';
        con.query(query, [status, leave_id], (err, result) => {
          if (err) {
            console.error('Database Error:', err);
            return next(err); // Pass error to next middleware
          }
      
          if (result.affectedRows > 0) {
            res.json({ Status: true, Message: 'Leave status updated successfully' });
          } else {
            res.json({ Status: false, Error: 'Failed to update leave status' });
          }
        });
      });
      


  // Route to approve leave
  router.post('/approve', (req, res, next) => {
    const { leave_id } = req.body;
    const query = 'UPDATE leaverequest SET status = "Approved" WHERE leave_id = ?';

    con.query(query, [leave_id], (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return next(err); // Pass error to next middleware
      }

      if (result.affectedRows > 0) {
        io.emit('leaveStatusUpdated', { leave_id, status: 'Approved' });
        res.send({ message: 'Leave Approved' });
      } else {
        res.status(404).send({ message: 'No record found for this leave request' });
      }
    });
  });

  // Route to reject leave
  router.post('/reject', (req, res, next) => {
    const { leave_id } = req.body;
    const query = 'UPDATE leaverequest SET status = "Rejected" WHERE leave_id = ?';

    con.query(query, [leave_id], (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return next(err); 
      }

      if (result.affectedRows > 0) {
        io.emit('leaveStatusUpdated', { leave_id, status: 'Rejected' });
        res.send({ message: 'Leave Rejected' });
      } else {
        res.status(404).send({ message: 'No record found for this leave request' });
      }
    });
  });

  router.get('/validateRegNumber/:regNumber', (req, res) => {
    const { regNumber } = req.params;

    const query = 'SELECT COUNT(*) AS count FROM employee WHERE regNumber = ?';
    con.query(query, [regNumber], (err, results) => {
        if (err) {
            console.error('Error validating regNumber:', err);
            return res.status(500).json({ error: 'Failed to validate regNumber' });
        }

        const isValid = results[0].count > 0; // Check if the count is greater than 0
        res.status(200).json({ isValid });
    });
});

  return router;
};
