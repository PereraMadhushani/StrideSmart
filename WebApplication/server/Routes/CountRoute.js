import express from 'express';
import con from '../Utils/db.js';

const router = express.Router();

export const countRouter = (io) => {
    router.get('/employeeCount', async (req, res) => {
        try {
            const result = await con.query("SELECT count(e_id) AS employee FROM employee");
            console.log('Employee Query Result:', result);
            
            // Check if result is in the expected format
            if (Array.isArray(result) && result[0]) {
                const [rows] = result;
                return res.json({ Status: true, Result: rows[0] });
            } else {
                throw new Error("Unexpected query result format");
            }
        } catch (err) {
            console.error('Query Error in /employeeCount:', err);
            return res.json({ Status: false, Error: "Query Error: " + err });
        }
    });

    router.get('/driverCount', async (req, res) => {
        try {
            const result = await con.query("SELECT count(d_id) AS driver FROM driver");
            console.log('Driver Query Result:', result);

            // Check if result is in the expected format
            if (Array.isArray(result) && result[0]) {
                const [rows] = result;
                return res.json({ Status: true, Result: rows[0] });
            } else {
                throw new Error("Unexpected query result format");
            }
        } catch (err) {
            console.error('Query Error in /driverCount:', err);
            return res.json({ Status: false, Error: "Query Error: " + err });
        }
    });

    return router;
};
