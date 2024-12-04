// loginRoute.js
import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import con from '../Utils/db.js'; // Ensure this is your correct DB connection
import CheckRole from '../middlewares/CheckRole.js';
import { VerifyToken } from '../middlewares/VerifyToken.js'; // Use named import

const router = express.Router(); // Initialize the router
const JWT_SECRET = 'your_secret_key'; // Ensure to keep your secret secure

export const loginRouter = (io) => {
  // Login Route
  router.post('/login', async (req, res) => {
    console.log("Login endpoint hit"); // Log when the endpoint is accessed

    const { regNumber, password } = req.body;
    console.log("Received registration number:", regNumber); // Log input
    console.log("Entered password:", password);

    const checkUserQuery = 'SELECT * FROM user WHERE regNumber = ?';
    con.query(checkUserQuery, [regNumber], async (err, result) => {
        if (err) {
            console.error('Database query error:', err); // Log the error
            return res.status(500).json({ error: 'Server error' });
        }

        console.log("Database result:", result); // Log the result of the query

        if (result.length === 0) {
            console.warn('No user found with that registration number'); // Log a warning
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const user = result[0];
        console.log("User found:", user); // Log the user found
        console.log("Hashed password from DB:", user.password);

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) {
                console.error('Error comparing passwords:', err); // Log the error
                return res.status(500).json({ error: 'Error during password comparison' });
            }

            console.log("Password match:", isMatch); // Log the password match result

            if (!isMatch) {
                console.warn('Password does not match for user:', user.regNumber); // Log a warning
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
            console.log("JWT Token generated:", token); // Log the generated token

            res.json({
                message: 'Login successful',
                token,
                user: {
                    id: user.id,
                    name: user.name,
                    regNumber: user.regNumber,
                    role: user.role,
                },
            });
        });
    });
});

  

  // Route only for Admin
  router.get('/admin', VerifyToken, CheckRole('admin'), (req, res) => {
    res.json({ message: 'Welcome, Admin!' });
  });

  // Route only for Managers
  router.get('/manager', VerifyToken, CheckRole('manager'), (req, res) => {
    res.json({ message: 'Welcome, Manager!' });
  });

  // Route only for Store Managers
  router.get('/storemanager', VerifyToken, CheckRole('storemanager'), (req, res) => {
    res.json({ message: 'Welcome, Store Manager!' });
  });

  return router; // Return the router
};
