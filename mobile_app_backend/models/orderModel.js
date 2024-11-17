const pool = require('../config/database');

class OrderModel {
  static async getAllOrders() {
    try {
      const [rows] = await pool.query('SELECT order_id, qty, completeDate FROM completeorder');
      return rows;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrderModel;