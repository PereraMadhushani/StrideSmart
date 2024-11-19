const db = require('../config/database');

class EmployeeModel {
    // Validate email format
    static isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate contact number (Sri Lankan format)
    static isValidContactNumber(number) {
        // Accepts formats: 0771234567, 771234567, +94771234567
        const contactRegex = /^(?:\+94|0)?[7][0-9]{8}$/;
        return contactRegex.test(number);
    }

    static async getEmployeeById(regNumber) {
        try {
            const [employee] = await db.query(
                'SELECT regNumber, name, email, address, contact_number FROM user WHERE regNumber = ?',
                [regNumber]
            );
            return employee[0];
        } catch (error) {
            throw error;
        }
    }

    static async updateEmployee(regNumber, employeeData) {
        try {
            const { name, email, address, contact_number } = employeeData;

            // Validation checks
            if (!name || name.trim().length < 2) {
                throw new Error('Name must be at least 2 characters long');
            }

            if (!this.isValidEmail(email)) {
                throw new Error('Invalid email format');
            }

            if (contact_number && !this.isValidContactNumber(contact_number)) {
                throw new Error('Invalid contact number format. Please use Sri Lankan format (e.g., 0771234567)');
            }

            // Check if email is already in use by another employee
            const isEmailAvailable = await this.validateEmail(email, regNumber);
            if (!isEmailAvailable) {
                throw new Error('Email is already in use by another employee');
            }

            // Update employee
            const [result] = await db.query(
                `UPDATE user 
                 SET name = ?, 
                     email = ?, 
                     address = ?, 
                     contact_number = ?,
                     updated_at = NOW()
                 WHERE regNumber = ?`,
                [name, email, address, contact_number, regNumber]
            );

            if (result.affectedRows === 0) {
                throw new Error('Employee not found');
            }

            return {
                success: true,
                message: 'Employee details updated successfully'
            };
        } catch (error) {
            throw error;
        }
    }

    static async validateEmail(email, currentRegNumber) {
        try {
            const [users] = await db.query(
                'SELECT regNumber FROM user WHERE email = ? AND regNumber != ?',
                [email, currentRegNumber]
            );
            return users.length === 0;
        } catch (error) {
            throw error;
        }
    }

    static async searchEmployees(searchTerm) {
        try {
            const [employees] = await db.query(
                `SELECT regNumber, name, email, address, contact_number 
                 FROM user 
                 WHERE name LIKE ? OR email LIKE ? OR regNumber LIKE ?`,
                [`%${searchTerm}%`, `%${searchTerm}%`, `%${searchTerm}%`]
            );
            return employees;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = EmployeeModel;
