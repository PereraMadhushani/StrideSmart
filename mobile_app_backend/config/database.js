const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
}).promise();

pool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to MySQL:', err);
  });

module.exports = pool;