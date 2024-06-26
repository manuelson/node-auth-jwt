const mysql = require('mysql');
const { logger } = require('../utils/logger');
const { DB_HOST, DB_USER, DB_PASS } = require('../utils/secrets');

const connection = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    port: 3306,
    password: DB_PASS,
    insecureAuth: true

});

connection.connect((err) => {
    if (err) logger.error(err.message);
});

module.exports = connection;
