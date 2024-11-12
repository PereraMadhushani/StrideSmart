const db = require('../config/database');

class User {
  static async findByRegNumber(regNumber) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM user WHERE regNumber = ?',
        [regNumber]
      );
      return rows[0];
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  }

  static async createUser(userData) {
    const { regNumber, password, role } = userData;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const [result] = await db.execute(
        'INSERT INTO user (regNumber, password, role) VALUES (?, ?, ?)',
        [regNumber, hashedPassword, role]
      );
      return result.insertId;
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  }

  static async findByEmail(email) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM user WHERE email = ?',
        [email]
      );
      return rows[0];
    } catch (error) {
      console.error('Error in findByEmail:', error);
      throw error;
    }
  }

  static async updateOTP(email, otp) {
    try {
      const [result] = await db.execute(
        'UPDATE user SET otp = ?, otp_expiry = DATE_ADD(NOW(), INTERVAL 15 MINUTE) WHERE email = ?',
        [otp, email]
      );
      return result.affectedRows > 0;
    } catch (error) {
      throw error;
    }
  }

  static async verifyOTP(email, otp) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM user WHERE email = ? AND otp = ? AND otp_expiry > NOW()',
        [email, otp]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }

  static async resetPassword(email, hashedPassword) {
    try {
      const query = `
        UPDATE user 
        SET password = ?, 
            otp = NULL, 
            otp_expiry = NULL,
            updated_at = CURRENT_TIMESTAMP 
        WHERE email = ?`;

      const [result] = await db.execute(query, [hashedPassword, email]);

      if (result.affectedRows === 0) {
        throw new Error('User not found or password update failed');
      }

      return true;
    } catch (error) {
      console.error('Reset password error:', error);
      throw error;
    }
  }

  static async findByEmail(email) {
    try {
      const [rows] = await db.execute(
        'SELECT * FROM user WHERE email = ?',
        [email]
      );
      return rows[0];
    } catch (error) {
      console.error('Find by email error:', error);
      throw error;
    }
  }

  static async updatePassword(regNumber, hashedPassword) {
    try {
      const [result] = await db.query(
        'UPDATE user SET password = ? WHERE regNumber = ?',
        [hashedPassword, regNumber]
      );
      
      if (result.affectedRows === 0) {
        throw new Error('User not found');
      }
      
      return true;
    } catch (error) {
      console.error('Update password error:', error);
      throw error;
    }
  }

}

module.exports = User;