// this is private file. don't need to send to github

const mysql = require('mysql2');
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'u6702896',
    password: '6702896',
    database: 'u6702896_csc350'
    // port: '3307' if you change port in xampp
});