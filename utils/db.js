// // this is private file. don't need to send to github

// const mysql = require('mysql2');
// export const mysqlPool = mysql.createPool({
//     host: 'localhost',
//     user: 'u6702896',
//     password: '6702896',
//     database: 'u6702896_csc350'
//     // port: '3307' if you change port in xampp
// });

const mysql = require('mysql2');

export const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'u6090059_csc350',
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.DB_SSL === 'true' ? { minVersion: 'TLSv1.2', rejectUnauthorized: true } : undefined,
});
