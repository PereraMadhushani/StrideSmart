import express from 'express';
import con from '../Utils/db.js'; // Adjust the path as necessary
const router = express.Router();

export const salaryRouter = (io) => {

  router.post('/calculateSalary', async (req, res) => {
    const { regNumber, completeMonth } = req.body; // Expect regNumber and month from the request
    
    // Log the input received from the request body
    console.log('Received regNumber:', regNumber);
    console.log('Received month:', completeMonth);

    try {
        // Fetch orders related to the given regNumber and month
        console.log('Running SQL query to fetch orders...');
        const query = `SELECT qty, unitPrice FROM completeorder WHERE regNumber = ? AND completeMonth = ?`;

        // Execute the query
        const [rows] = await con.query(query, [regNumber, completeMonth]);
        console.log('Query result:', rows);

        // Process the result as needed
        // ...

        res.status(200).json(rows);
    } catch (error) {
        console.error('Error executing query:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });

router.get('/salarySlip', (req, res) => {
  con.query('SELECT regNumber, month, netSalary FROM salarySlip', (error, results) => {
      if (error) {
          console.error('Error fetching salary slips:', error.message);
          return res.status(500).json({ error: 'Failed to fetch salary slips', details: error.message });
      }

      // Check the type of results
      console.log('Type of results:', typeof results);
      console.log('Results:', results);

      // If results is not an array, handle the unexpected format
      if (!Array.isArray(results)) {
          console.error('Expected results to be an array, but got:', results);
          return res.status(500).json({ error: 'Unexpected response structure' });
      }

      // Send the results as JSON
      res.json(results);
  });
});


  return router;
};