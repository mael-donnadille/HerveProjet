const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '', 
  database: 'herve_db'
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connecté');
});

module.exports = db;
