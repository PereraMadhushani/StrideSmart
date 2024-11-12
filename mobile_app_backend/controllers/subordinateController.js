const subordinateModel = require('../models/subordinateModel');

const subordinateController = {
  getAll: async (req, res) => {
    try {
      const results = await subordinateModel.getAll();
      res.json({
        success: true,
        subordinates: results || []
      });
    } catch (err) {
      console.error('Error fetching subordinates:', err);
      res.status(500).json({
        success: false,
        message: 'Error fetching subordinates',
        error: err.message
      });
    }
  },

  add: async (req, res) => {
    try {
      const { name, address, contactNumber, gender } = req.body;
      
      // Enhanced validation
      if (!name || !address || !contactNumber || !gender) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required: name, address, contactNumber, gender'
        });
      }

      // Validate contact number
      if (!/^\d{10}$/.test(contactNumber)) {
        return res.status(400).json({
          success: false,
          message: 'Contact number must be exactly 10 digits'
        });
      }

      const results = await subordinateModel.add(req.body);
      res.json({
        success: true,
        message: 'Subordinate added successfully',
        insertedId: results.insertId
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Error adding subordinate',
        error: err.message
      });
    }
  },

  update: async (req, res) => {
    try {
      const { name, address, contactNumber, gender } = req.body;
      
      // Enhanced validation
      if (!name || !address || !contactNumber || !gender) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required: name, address, contactNumber, gender'
        });
      }

      // Validate contact number
      if (!/^\d{10}$/.test(contactNumber)) {
        return res.status(400).json({
          success: false,
          message: 'Contact number must be exactly 10 digits'
        });
      }

      const results = await subordinateModel.update(req.params.id, req.body);
      if (results.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Subordinate not found'
        });
      }
      res.json({
        success: true,
        message: 'Subordinate updated successfully'
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Error updating subordinate',
        error: err.message
      });
    }
  },

  delete: async (req, res) => {
    try {
      const results = await subordinateModel.delete(req.params.id);
      if (results.affectedRows === 0) {
        return res.status(404).json({
          success: false,
          message: 'Subordinate not found'
        });
      }
      res.json({
        success: true,
        message: 'Subordinate deleted successfully'
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: 'Error deleting subordinate',
        error: err.message
      });
    }
  }
};

module.exports = subordinateController;