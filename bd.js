const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((erro) => {
  if (erro) {
    throw erro;
  } else {
    console.log("------ CONECTADO AO BD -------");
  }
});

module.exports = db;
