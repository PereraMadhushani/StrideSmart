const OrderModel = require('../models/orderModel');

class OrderController {
  static async getAllOrders(req, res) {
    try {
      const orders = await OrderModel.getAllOrders();
      res.json(orders);
    } catch (err) {
      console.error('Error fetching orders:', err);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
}

module.exports = OrderController;