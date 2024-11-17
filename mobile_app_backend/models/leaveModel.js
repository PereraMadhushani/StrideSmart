const pool = require('../config/database');

class LeaveModel {
  static async applyLeave(leaveData) {
    const { regNumber, duration, leaveType, from_date, to_date, reason } = leaveData;
    
    try {
      console.log('Inserting leave data:', leaveData);  // Debug log
      
      const query = `
        INSERT INTO leaverequest 
        (regNumber, duration, leaveType, from_date, to_date, reason, status) 
        VALUES (?, ?, ?, ?, ?, ?, 'Pending')
      `;
      
      const [result] = await pool.query(query, [
        regNumber,
        duration,
        leaveType,
        from_date,
        to_date,
        reason
      ]);
      
      console.log('Insert result:', result);  // Debug log
      return result;
    } catch (error) {
      console.error('Database error:', error);  // Debug log
      throw error;
    }
  }
}

module.exports = LeaveModel;