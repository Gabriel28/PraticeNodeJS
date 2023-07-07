require('dotenv').config();
const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: process.env.MYSQL_DB_HOST,
    port: process.env.MYSQL_DB_PORT,
    user: process.env.MYSQL_DB_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DB_NAME
});

dbConnection.connect((error) => {
    if (error) {
        console.error(`Error connecting to database: ${error.message}`);
    } else {
        console.log(`DB ${process.env.MYSQL_DB_NAME}: Connected successfully`);
    }
});
module.exports = dbConnection;