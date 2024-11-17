const express = require('express');
const router = express.Router();
const OrderStatusController = require('../controllers/orderStatusController');

router.post('/submit-order', OrderStatusController.submitOrderStatus);
router.get('/order-status/:order_id/:reg_number', OrderStatusController.getOrderStatus);

module.exports = router;