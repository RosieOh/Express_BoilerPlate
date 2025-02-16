const mysql = require("mysql2");
require("dotenv").config(); 

// 데이터베이스 연결 설정
const pool = mysql.createPool({
  host: process.env.DB_HOST,    
  user: process.env.DB_USER,   
  password: process.env.DB_PASS,  
  database: process.env.DB_NAME, 
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const promisePool = pool.promise();

module.exports = promisePool;
