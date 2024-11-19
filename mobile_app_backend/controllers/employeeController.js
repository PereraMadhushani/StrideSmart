const EmployeeModel = require('../models/employeeModel');

class EmployeeController {
    static async getEmployeeDetails(req, res) {
        try {
            const { regNumber } = req.params;
            console.log('Fetching employee details for:', regNumber);

            const employee = await EmployeeModel.getEmployeeById(regNumber);
            
            if (!employee) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Employee not found'
                });
            }

            res.json({
                status: 'success',
                data: employee
            });
        } catch (error) {
            console.error('Error getting employee details:', error);
            res.status(500).json({
                status: 'error',
                message: 'Failed to get employee details'
            });
        }
    }

    static async updateEmployeeDetails(req, res) {
        try {
            const { regNumber } = req.params;
            const employeeData = req.body;
            console.log('Updating employee:', regNumber, employeeData);

            // Validate required fields
            if (!employeeData.name || !employeeData.email) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Name and email are required'
                });
            }

            const result = await EmployeeModel.updateEmployee(regNumber, employeeData);

            res.json({
                status: 'success',
                message: result.message
            });
        } catch (error) {
            console.error('Error updating employee:', error);
            res.status(400).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static async searchEmployees(req, res) {
        try {
            const { query } = req.query;
            
            if (!query) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Search query is required'
                });
            }

            const employees = await EmployeeModel.searchEmployees(query);
            
            res.json({
                status: 'success',
                data: employees
            });
        } catch (error) {
            console.error('Error searching employees:', error);
            res.status(500).json({
                status: 'error',
                message: 'Failed to search employees'
            });
        }
    }
}

module.exports = EmployeeController;