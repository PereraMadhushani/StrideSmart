import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import con from '../Utils/db.js';

import { registerUser, getUsers, getNotifications } from './controllers/UserController.js';

export function adminRouter(io) {
    const router = express.Router();

    //Image upload configuration
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const dir = 'Public/Images';
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            cb(null, dir);
        },
        filename: (req, file, cb) => {
            cb(null,  `image_${Date.now()}${path.extname(file.originalname)}`);
        },
    });
    const upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            const fileTypes = /jpeg|jpg|png/;
            const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
            const mimetype = fileTypes.test(file.mimetype);

            if (mimetype && extname) {
                return cb(null, true);
            } else {
                cb('Error: Images Only!');
            }
        },
    });

    // Routes for user management
    router.post('/register', (req, res, next) => {
        upload.single('image')(req, res, (err) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            next();
        });
    }, registerUser);
    
    
router.get('/users', getUsers);
   router.delete('/deleteUser/:id', (req, res) => {
    const userId = req.params.id;
    console.log(`Deleting user with ID: ${userId}`); // Log the employee ID received

    const deleteQuery = `DELETE FROM user WHERE id = ?`;
    
    con.query(deleteQuery, [userId], (err, result) => {
    if (err) {
        return res.status(500).json({ Error: 'Error deleting user' });
    }
    res.json({ Status: 'User deleted successfully' });
    });
  });

  // Logout Route
router.get('/logout', (req, res, next) => {
    try {
      res.clearCookie('token');
      return res.json({ Status: true });
    } catch (error) {
      next(error);
    }
  });


    router.get('/notifications/:userId', getNotifications);

    return router;
}
