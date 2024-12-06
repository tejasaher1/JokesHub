// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Tejas",
//   database: "dad_jokes",
// });

// db.connect((error) => {
//   if (error) throw error;

//   console.log("Connected to MySQL Database");
// });

// module.exports = db;



const mysql = require('mysql2');

require('dotenv').config(); 

const db = mysql.createConnection({
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');

  db.query('CREATE DATABASE IF NOT EXISTS dad_jokes', (err) => {
    if (err) throw err;

    db.changeUser({ database: 'dad_jokes' }, (err) => {
      if (err) throw err;

      const createTableQuery = `
        CREATE TABLE IF NOT EXISTS favourites  (
          id INT AUTO_INCREMENT PRIMARY KEY,
          joke_id VARCHAR(255) NOT NULL UNIQUE,
          joke_text TEXT NOT NULL
        )
      `;
      db.query(createTableQuery, (err) => {
        if (err) throw err;
      });
    });
  });
});


module.exports = db;
