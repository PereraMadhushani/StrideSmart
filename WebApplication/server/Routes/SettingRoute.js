import express from 'express';
import multer from 'multer';
import bcrypt from 'bcrypt';
import cors from 'cors';
import con from '../Utils/db.js'; // Database connection
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();
router.use(express.json());
router.use(cors());
router.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Ensure uploads directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination:  uploadsDir,
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

export const settingRouter= (io) => {

// API: Update profile picture
router.post('/uploadProfilePicture', upload.single('image'), (req, res) => {
  const regNumber = req.body.regNumber;

  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }

  const profilePicturePath = `/uploads/${req.file.filename}`;

  const sql = 'UPDATE user SET image = ? WHERE regNumber = ?';
  con.query(sql, [profilePicturePath, regNumber], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error updating profile picture');
    }
    res.send({ message: 'Profile picture updated successfully', image: profilePicturePath });
  });
});

// API: Update name and password
router.post('/updateProfile', async (req, res) => {
  const { regNumber, name, password, newPassword } = req.body;

  try {
    // Fetch current user details
    const user = await new Promise((resolve, reject) =>{
      con.query('SELECT * FROM user WHERE regNumber = ?', [regNumber], (err, results) =>{
        console.log("Query Results: ", results); 
        if (err) return reject(err); // Database error
        if (results.length === 0) return reject(new Error('User not found')); // No user found
        resolve(results[0]); // Return the first user record
  })
});
    
     // Ensure the user object has a password
     if (!user || !user.password) {
      return res.status(404).send('User not found or password is missing');
    }
    // Check current password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch){ 
      return res.status(400).send('Incorrect current password');
    }

    // Hash the new password
    const hashedPassword = newPassword ? await bcrypt.hash(newPassword, 10) : user.password;

    // Update the name and/or password
    const sql = 'UPDATE user SET name = ?, password = ? WHERE regNumber = ?';
    con.query(sql, [name, hashedPassword, regNumber], (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error updating profile');
      }
      res.send({ message: 'Profile updated successfully' });
    });
  } catch (error) {
    console.error(error.message);
    if (error.message === 'User not found') {
      res.status(404).send('User not found');
    } else {
      res.status(500).send('Error updating profile');
    }
  }
});
return router;
}
