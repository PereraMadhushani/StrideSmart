import express from 'express';
import con from '../Utils/db.js';
const router = express.Router();


export const driverRouter = (io) => {
    // API endpoint to get driver data
    router.get('/drivers', (req, res) => {
        const sql = `SELECT id, regNumber, name, email, address, contact_number, image FROM user WHERE role='driver'`;

        // Query the database
        con.query(sql, (err, results) => {
            if (err) {
                console.error('Error fetching data:', err);
                return res.status(500).json({ error: 'Internal Server Error' });
            } else {
                return res.json(results);
            }
        });
    });

    router.delete('/delete_driver/:d_id', (req, res) => {
        const driverId = req.params.d_id;
        
        const deleteQuery = `DELETE FROM driver WHERE d_id = ?`;
        
        con.query(deleteQuery, [driverId], (err, result) => {
          if (err) {
            return res.status(500).json({ Error: 'Error deleting driver' });
          }
          res.json({ Status: 'Driver deleted successfully' });
        });
      });

    return router;
};
