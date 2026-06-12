const mysql = require("mysql2");

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"yourpassword",
    database:"portfolio"
});

module.exports = connection;