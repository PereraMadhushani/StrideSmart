const OrderStatusModel = require('../models/orderStatusModel');

class OrderStatusController {
  static async submitOrderStatus(req, res) {
    try {
      const { order_id, reg_number, current_status } = req.body;

      // Input validation
      if (!order_id || !reg_number || !current_status) {
        return res.status(400).json({
          success: false,
          message: 'Order ID, Registration Number, and status are required'
        });
      }

      // Check if status is valid
      const validStatuses = ['completed', 'pending'];
      if (!validStatuses.includes(current_status.toLowerCase())) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status. Status must be either Completed or Pending'
        });
      }

      const result = await OrderStatusModel.updateOrderStatus(
        order_id,
        reg_number,
        current_status
      );

      if (result.success) {
        res.json({
          success: true,
          message: 'Order status updated successfully'
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Order not found. Please check Order ID and Registration Number.'
        });
      }
    } catch (error) {
      console.error('Error updating order status:', error);
      res.status(500).json({
        success: false,
        message: 'Error updating order status'
      });
    }
  }

  static async getOrderStatus(req, res) {
    try {
      const { order_id, reg_number } = req.params;
      const order = await OrderStatusModel.getOrderStatus(order_id, reg_number);

      if (order) {
        res.json({
          success: true,
          order: order
        });
      } else {
        res.status(404).json({
          success: false,
          message: 'Order not found'
        });
      }
    } catch (error) {
      console.error('Error fetching order status:', error);
      res.status(500).json({
        success: false,
        message: 'Error fetching order status'
      });
    }
  }
}

module.exports = OrderStatusController;
