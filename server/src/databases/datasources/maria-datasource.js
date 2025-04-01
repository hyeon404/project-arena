const mariadb = require('mariadb');

require('dotenv').config({path:`.env.${process.env.NODE_ENV|| 'dev'}`});

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    idleTimeout: 30000
});

module.exports = pool