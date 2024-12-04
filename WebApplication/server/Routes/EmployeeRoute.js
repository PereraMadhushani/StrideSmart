import express from 'express';
import con from '../Utils/db.js'; // Ensure this is your correct DB connection

const router = express.Router();

export const employeeRouter = (io) => {

  // API endpoint to get employee data
  router.get('/employees', (req, res) => {
    const sql = `SELECT regNumber, image, name, address, contact_number, email FROM user WHERE role = 'employee'`;
      con.query(sql, (err, results) => {
      if (err) {
          console.error('Error fetching data:', err);
          res.status(500).json({ error: 'Internal Server Error' });
      } else {
          res.json(results);  // Send the fetched data as JSON
      }
  });
});


  router.delete('/delete_employee/:e_id', (req, res) => {
    const employeeId = req.params.e_id;
    console.log(`Deleting employee with ID: ${employeeId}`);
    
    const deleteQuery = `DELETE FROM employee WHERE e_id = ?`;
    
    con.query(deleteQuery, [employeeId], (err, result) => {
      if (err) {
        return res.status(500).json({ Error: 'Error deleting employee' });
      }
      res.json({ Status: 'Employee deleted successfully' });
    });
  });

    return router; 
}

// export default router;
