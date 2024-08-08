require('dotenv').config();
const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD
});

connection.getConnection().then(() => {
  console.log('БД успешно подключено');
}).catch(err => {
  console.error(`Во время запуска БД возникла ошибка: ${err}`);
});

module.exports = connection;
