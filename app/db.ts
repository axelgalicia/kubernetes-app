
const mysql = require('nodejs-mysql').default;

// Database config
// single database connection
const config = {
    host: process.env.MYSQL_TEST_PORT_3306_TCP_ADDR || 'localhost',
    port: process.env.MYSQL_TEST_PORT_3306_TCP_PORT || 3306,
    user: process.env.MYSQL_USER || 'user_test',
    password: process.env.MYSQL_PASSWORD || 'user_pass',
    database: process.env.MYSQL_DATABASE || 'summit'
}


export const db = mysql.getInstance(config);
