const pool = require('../config/database');

class OrderStatusModel {
  static async updateOrderStatus(orderId, regNumber, status) {
    try {
      const [result] = await pool.query(
        'UPDATE orders SET status = ? WHERE order_id = ? AND regNumber = ?',
        [status.toLowerCase(), orderId, regNumber]
      );
      return {
        success: result.affectedRows > 0,
        affectedRows: result.affectedRows
      };
    } catch (error) {
      throw error;
    }
  }

  static async getOrderStatus(orderId, regNumber) {
    try {
      const [rows] = await pool.query(
        'SELECT * FROM orders WHERE order_id = ? AND regNumber = ?',
        [orderId, regNumber]
      );
      return rows[0];
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderStatusModel;