import express from 'express';
import con from '../Utils/db.js'; // Ensure this is your correct DB connection
import multer from 'multer';
import path from 'path';

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';


export function resetPasswordRouter(io) {
    router.post('/forgot-password', (req, res) => {
        console.log('Forgot password route hit');
        const { email } = req.body;
    
        // Check if email exists in the database
        const query = 'SELECT * FROM user WHERE email = ?';
        con.query(query, [email], (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).send('Server error');
            }
            if (results.length === 0) {
                return res.status(404).send('Email not found');
            }
    
            // Generate token
            const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
            const resetLink = `http://localhost:5000/reset-password/${token}`;
    
            // Send email
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'piyumikithsiri@gmail.com',
                    pass: 'Randika@123'
                }
            });
    
            const mailOptions = {
                from: 'madhushaniperera1018@gmail.com',
                to: email,
                subject: 'Password Reset',
                text: `Click on this link to reset your password: ${resetLink}`
            };
    
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.error('Email error:', error);
                    return res.status(500).send('Error sending email');
                }
                res.send('Password reset link has been sent to your email.');
            });
        });
    });
    

    router.post('/reset-password/:token', (req, res) => {
        const { token } = req.params;
        const { newPassword } = req.body;
    
        // Verify the token
        jwt.verify(token, JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(400).send('Invalid or expired token');
            }
    
            const email = decoded.email;
    
            // Hash the new password
            bcrypt.hash(newPassword, 10, (err, hashedPassword) => {
                if (err) {
                    return res.status(500).send('Server error');
                }
    
                // Update the password in the database
                const query = 'UPDATE user SET password = ? WHERE email = ?';
                con.query(query, [hashedPassword, email], (err, result) => {
                    if (err) {
                        return res.status(500).send('Error updating password');
                    }
                    res.send('Password has been reset successfully');
                });
            });
        });
    });
    
      return router;
    }