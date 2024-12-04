import express from 'express';
import con from '../Utils/db.js'; // Adjust the path as necessary

const router = express.Router();

export const orderRouter = (io) => {
    router.post('/orders', (req, res) => {
        const { regNumber, date, qty, dueDate,unitPrice } = req.body;

        const query = `INSERT INTO orders (regNumber, date, qty, dueDate,unitPrice,status) VALUES (?, ?, ?, ?,?,"pending")`;
        const values = [regNumber, date, qty, dueDate, unitPrice,"pending"];

        con.query(query, values, (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                return res.status(500).json({ error: 'Failed to save order' });
            }
            res.status(200).json({ message: 'Order submitted successfully!' });
        });
    });

      // GET endpoint to fetch all orders
      router.get('/orders', (req, res) => {
        const { status } = req.query; // Get the status query parameter if provided
    
        let query = 'SELECT * FROM orders';
        const values = [];
    
        if (status) {
            query += ' WHERE status = ?';
            values.push(status);
        }
        query += ' ORDER BY date DESC';
    
        con.query(query, values, (err, results) => {
            if (err) {
                console.error('Error fetching orders:', err);
                return res.status(500).json({ error: 'Failed to fetch orders' });
            }
            res.status(200).json(results);
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
}
