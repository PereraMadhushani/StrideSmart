const pool = require('../config/database');

class LeaveController {
  static async applyLeave(req, res) {
    try {
      const { regNumber, duration, leaveType, from_date, to_date, reason } = req.body;

      // Validate required fields
      if (!regNumber || !duration || !leaveType || !from_date || !to_date || !reason) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required.',
        });
      }

      // Validate leave type
      const validLeaveTypes = ['Annual', 'Casual', 'Medical'];
      if (!validLeaveTypes.includes(leaveType)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid leave type.',
        });
      }

      // Insert into database
      const query = `
        INSERT INTO leaverequest (regNumber, duration, leaveType, from_date, to_date, reason)
        VALUES (?, ?, ?, ?, ?, ?)
      `;

      const [result] = await pool.query(query, [
        regNumber,
        duration,
        leaveType,
        from_date,
        to_date,
        reason
      ]);

      res.status(200).json({
        success: true,
        message: 'Leave applied successfully'
      });

    } catch (err) {
      console.error('Error applying leave:', err);
      res.status(500).json({
        success: false,
        message: 'Error applying leave'
      });
    }
  }

  // Add this method for handling the GET request
  static async getLeaves(req, res) {
    try {
      const [rows] = await pool.query('SELECT * FROM leaverequest ORDER BY from_date DESC');
      res.json({
        success: true,
        leaves: rows
      });
    } catch (err) {
      console.error('Error fetching leaves:', err);
      res.status(500).json({
        success: false,
        message: 'Error fetching leaves'
      });
    }
  }
}

module.exports = LeaveController;