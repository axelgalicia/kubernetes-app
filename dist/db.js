"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require('nodejs-mysql').default;
// Database config
// single database connection
var config = {
    host: process.env.MYSQL_TEST_PORT_3306_TCP_ADDR || 'localhost',
    port: process.env.MYSQL_TEST_PORT_3306_TCP_PORT || 3306,
    user: process.env.MYSQL_USER || 'user_test',
    password: process.env.MYSQL_PASSWORD || 'password',
    database: process.env.MYSQL_DATABASE || 'testdb'
};
exports.db = mysql.getInstance(config);
