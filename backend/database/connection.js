// database/connection.js
const mysql = require("mysql");

// Create a connection object
const connection = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "techpanchayat",
  port: Number(process.env.DB_PORT) || 3306
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("MySQL connected successfully");
  }
});

module.exports = connection;
