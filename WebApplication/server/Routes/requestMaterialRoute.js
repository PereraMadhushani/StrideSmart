import express from 'express';
import con from '../Utils/db.js'; // Adjust the path as necessary

const router = express.Router();

export const requestMaterialRouter = (io) => {

    // Helper function to wrap `con.query` in a Promise
    const queryAsync = (sql, params) => {
        return new Promise((resolve, reject) => {
            con.query(sql, params, (err, results) => {
                if (err) reject(err);
                else resolve(results);
            });
        });
    };

    // Validate regNumber (Employee table)
    router.get('/validateRegNumber/:regNumber', (req, res) => {
        const { regNumber } = req.params;

        const query = 'SELECT COUNT(*) AS count FROM employee WHERE regNumber = ?';
        con.query(query, [regNumber], (err, results) => {
            if (err) {
                console.error('Error validating regNumber:', err);
                return res.status(500).json({ error: 'Failed to validate regNumber' });
            }

            const isValid = results[0].count > 0; // Check if regNumber exists in employee table
            res.status(200).json({ isValid });
        });
    });

    // Validate driverId (Driver table)
    router.get('/validateDriverId/:driverId', (req, res) => {
        const { driverId } = req.params;

        const query = 'SELECT COUNT(*) AS count FROM driver WHERE regNumber = ?';
        con.query(query, [driverId], (err, results) => {
            if (err) {
                console.error('Error validating driverId:', err);
                return res.status(500).json({ error: 'Failed to validate driverId' });
            }

            const isValid = results[0].count > 0; // Check if driverId exists in driver table
            res.status(200).json({ isValid });
        });
    });

    // Fetch employee name based on regNumber
router.get('/employeeName/:regNumber', (req, res) => {
    const { regNumber } = req.params;

    // Query to fetch the employee name based on regNumber
    const query = 'SELECT name FROM employee WHERE regNumber = ?';
    con.query(query, [regNumber], (err, results) => {
        if (err) {
            console.error('Error fetching employee name:', err);
            return res.status(500).json({ error: 'Failed to fetch employee name' });
        }

        // Check if the employee exists
        if (results.length === 0) {
            return res.status(404).json({ error: 'Employee not found' });
        }

        // Send the employee's name as a response
        res.status(200).json({ name: results[0].name });
    });
});

    // Route to handle new requests
    router.post('/newRequest', (req, res) => {
        const { date, regNumber, driverId, name, rawMaterial, requiredDate } = req.body;

         // Validate requiredDate > currentDate
    const currentDate = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
    if (requiredDate <= currentDate) {
        return res.status(400).json({ message: 'Required Date must be greater than the current date.' });
    }

        // First, validate the regNumber (Employee table)
        con.query('SELECT COUNT(*) AS count FROM employee WHERE regNumber = ?', [regNumber], (err, results) => {
            if (err) {
                console.error('Error validating regNumber:', err);
                return res.status(500).json({ message: 'Error validating Employee regNumber' });
            }

            if (results[0].count === 0) {
                return res.status(400).json({ message: 'Invalid Employee regNumber. Please check the regNumber.' });
            }

            // Then, validate the driverId (Driver table)
            con.query('SELECT COUNT(*) AS count FROM driver WHERE regNumber = ?', [driverId], (err, driverResults) => {
                if (err) {
                    console.error('Error validating driverId:', err);
                    return res.status(500).json({ message: 'Error validating Driver ID' });
                }

                if (driverResults[0].count === 0) {
                    return res.status(400).json({ message: 'Invalid Driver ID. Please check the Driver ID.' });
                }

                // If both the regNumber and driverId are valid, insert the new request into the database
                con.query(
                    `INSERT INTO request_material (date, regNumber, driverId, name, rawMaterial, requiredDate) 
                    VALUES (?, ?, ?, ?, ?, ?)`,
                    [date, regNumber, driverId, name, rawMaterial, requiredDate],
                    (err, result) => {
                        if (err) {
                            console.error('Error inserting new request:', err);
                            return res.status(500).json({ message: 'Failed to submit request' });
                        }

                        res.status(200).json({ message: 'Request submitted successfully', requestId: result.insertId });
                    }
                );
            });
        });
    });

    // Route to handle new requests (Fetch requests)
    router.get('/newRequest', (req, res) => {
        const sql = 'SELECT regNumber, name, driverId, rawMaterial, requiredDate FROM request_material';
        con.query(sql, (err, results) => {
            if (err) {
                console.error('Error fetching data:', err);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json(results);  
            }
        });
    });

    return router;
};
