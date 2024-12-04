// import express from 'express';
// import con from '../Utils/db.js'; // Ensure this is your correct db connection
// import jwt from 'jsonwebtoken';
// import multer from 'multer';
// import bodyParser from 'body-parser';
// import path from 'path';

// const router = express.Router();

// export const managerRouter = (io) => {
//     // Define your routes here
//     router.get('/some-endpoint', (req, res, next) => {
//         try {
//             res.send('Hello from manager router');
//         } catch (error) {
//             next(error); // Pass error to the error-handling middleware
//         }
//     });

//     return router;
// };

// // Middleware
// router.use(bodyParser.json());

// // Image upload configuration
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'Public/Images');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({
//   storage: storage,
// });

// // Logout Route
// router.get('/logout', (req, res, next) => {
//   try {
//     res.clearCookie('token');
//     return res.json({ status: true });
//   } catch (error) {
//     next(error);
//   }
// });

// // Add New Employee
// router.post('/add_employee', upload.single('image'), (req, res, next) => {
//   const sql = `INSERT INTO employee (user_id, name, role, address, contact_number, email, image) VALUES (?)`;

//   const values = [
//     req.body.user_id,
//     req.body.name,
//     req.body.role,
//     req.body.address,
//     req.body.contact_number,
//     req.body.email,
//     req.file.filename,
//   ];

//   con.query(sql, [values], (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true });
//   });
// });

// // Get Employee Details by ID
// router.get('/detail/:id', (req, res, next) => {
//   const { id } = req.params;

//   const sql = 'SELECT * FROM employee WHERE user_id = ?';

//   con.query(sql, [id], (err, result) => {
//     if (err) {
//       console.error('Error fetching employee details:', err);
//       return next(err); // Pass error to next middleware
//     }

//     if (result.length === 0) {
//       return res.status(404).json({ error: 'Employee not found' });
//     }

//     res.json(result);
//   });
// });

// // Get All Employees
// router.get('/employee', (req, res, next) => {
//   const sql = 'SELECT * FROM employee';
//   con.query(sql, (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true, result });
//   });
// });

// // Edit Employee
// router.put('/edit_employee/:id', (req, res, next) => {
//   const id = req.params.id;
//   const sql = `UPDATE employee SET name=?, email=?, salary=?, address=?, category_id=? WHERE id=?`;

//   const values = [
//     req.body.name,
//     req.body.email,
//     req.body.salary,
//     req.body.address,
//     req.body.category_id,
//   ];

//   con.query(sql, [...values, id], (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true, result });
//   });
// });

// // Delete Driver
// router.delete('/delete_driver/:id', (req, res, next) => {
//   const id = req.params.id;
//   const sql = 'DELETE FROM driver WHERE id=?';
//   con.query(sql, [id], (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true, result });
//   });
// });

// // Add New Driver
// router.post('/add_driver', upload.single('image'), (req, res, next) => {
//   const sql = `INSERT INTO driver (user_id, name, address, contact_number, email, image) VALUES (?)`;

//   const values = [
//     req.body.user_id,
//     req.body.name,
//     req.body.address,
//     req.body.contact_number,
//     req.body.email,
//     req.file.filename,
//   ];

//   con.query(sql, [values], (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true });
//   });
// });

// // Get All Drivers
// router.get('/driver', (req, res, next) => {
//   const sql = 'SELECT * FROM driver';
//   con.query(sql, (err, result) => {
//     if (err) return next(err); // Pass error to next middleware
//     return res.json({ status: true, result });
//   });
// });

// export default router ;
