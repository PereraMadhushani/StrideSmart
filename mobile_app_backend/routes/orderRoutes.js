const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/orderController');

router.get('/', OrderController.getAllOrders);

module.exports = router;
