// controllers/salaryController.js
const SalaryModel = require('../models/salaryModel');
const PDFDocument = require('pdfkit');
const bcrypt = require('bcrypt');

class SalaryController {
    static async getAllSalaries(req, res) {
        try {
            const { rows, totalSalary } = await SalaryModel.getAllSalaries();
            res.json({
                status: 'success',
                total_salary: totalSalary,
                salaries: rows
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static async generateSalarySlip(req, res) {
        const { regNumber, password, slipId } = req.body;
        
        try {
            // Input validation
            if (!regNumber || !password || !slipId) {
                return res.status(400).json({
                    status: 'error',
                    message: 'Missing required fields'
                });
            }

            // Verify password
            const isValidPassword = await SalaryModel.verifyPassword(regNumber, password);
            
            if (!isValidPassword) {
                return res.status(401).json({
                    status: 'error',
                    message: 'Invalid password'
                });
            }
            
            // Get salary details
            const salary = await SalaryModel.getSalaryDetails(slipId);
            
            if (!salary) {
                return res.status(404).json({
                    status: 'error',
                    message: 'Salary slip not found'
                });
            }

            // Create PDF
            const doc = new PDFDocument({
                margin: 50,
                size: 'A4'
            });

            // Set response headers
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', `attachment; filename=salary_slip_${slipId}.pdf`);

            // Pipe the PDF to the response
            doc.pipe(res);

            // Add content
            doc.fontSize(20)
               .font('Helvetica-Bold')
               .text('Malitha Lanka (PVT) LTD', {
                   align: 'center'
               });

            doc.moveDown()
               .fontSize(16)
               .text('SALARY SLIP', {
                   align: 'center'
               });

            doc.moveDown();

            // Employee Details
            const details = [
                { label: 'Employee Name', value: salary.name },
                { label: 'Registration Number', value: salary.regNumber },
                { label: 'Address', value: salary.address },
                { label: 'Month', value: salary.month },
                { label: 'Net Salary', value: `Rs. ${parseFloat(salary.net_salary).toFixed(2)}` }
            ];

            details.forEach(detail => {
                doc.fontSize(12)
                   .font('Helvetica-Bold')
                   .text(`${detail.label}:`, {
                       continued: true
                   })
                   .font('Helvetica')
                   .text(` ${detail.value}`);
                doc.moveDown(0.5);
            });

            doc.moveDown(2)
               .fontSize(10)
               .text('This is a computer-generated document.', {
                   align: 'center'
               });

            doc.end();

        } catch (error) {
            console.error('PDF Generation Error:', error);
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }
}

module.exports = SalaryController;