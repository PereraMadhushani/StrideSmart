const db = require('../config/database');
const PDFDocument = require('pdfkit');
const bcrypt = require('bcrypt');

class SalaryModel {
    static async getAllSalaries() {
        const query = `
            SELECT s.slip_id, s.regNumber, s.net_salary, s.month, 
                   u.name, u.address 
            FROM salaryslip s 
            JOIN user u ON s.regNumber = u.regNumber
        `;
        
        try {
            const [rows] = await db.query(query);
            const totalSalary = rows.reduce((sum, row) => sum + parseFloat(row.net_salary), 0);
            return { rows, totalSalary };
        } catch (error) {
            throw error;
        }
    }

    static async verifyPassword(regNumber, password) {
        try {
            const [rows] = await db.query(
                'SELECT password FROM user WHERE regNumber = ?',
                [regNumber]
            );

            if (rows.length === 0) {
                return false;
            }

            const isValid = await bcrypt.compare(password, rows[0].password);
            return isValid;
        } catch (error) {
            throw error;
        }
    }

    static async getSalaryDetails(slipId) {
        try {
            const [rows] = await db.query(
                `SELECT s.*, u.name, u.address 
                 FROM salaryslip s 
                 JOIN user u ON s.regNumber = u.regNumber 
                 WHERE s.slip_id = ?`,
                [slipId]
            );
            
            if (rows.length === 0) {
                throw new Error('Salary slip not found');
            }
            
            return rows[0];
        } catch (error) {
            throw error;
        }
    }




    static generatePDF(salary) {
        const doc = new PDFDocument();
        
        // Add content to PDF
        doc.fontSize(16).text('Malitha Lanka (PVT) LTD', { align: 'center' });
        doc.moveDown();
        doc.fontSize(12);
        doc.text(`Name: ${salary.name}`);
        doc.text(`Registration Number: ${salary.regNumber}`);
        doc.text(`Address: ${salary.address}`);
        doc.text(`Month: ${salary.month}`);
        doc.text(`Net Salary: Rs. ${parseFloat(salary.net_salary).toFixed(2)}`);
        
        return doc;
    }
}

module.exports = SalaryModel;