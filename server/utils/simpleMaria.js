const mariadb = require('mariadb');
const logger = require('./logger');

require('dotenv').config({path:`.env.${process.env.NODE_ENV|| 'dev'}`});

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5
});

function select(query, ...args) {
    let conn;

    return pool.getConnection().then(connection => {
        conn = connection;
        return conn.query(query, args);
    }).then(rows => {
        return rows;
    }).catch(err => {
        logger.error(err);
    }).finally(() => {
        if (conn) conn.release();
    })
}

function selectOne(query, ...args) {
    return select(query, args).then(rows => {
        return rows[0];
    })
}

function getCount(query, ...args) {
    return select(query, args).then(rows => {
        try {
            return Object.values(rows[0])[0];
        } catch (err) {
            return -1;
        }
    })
}

module.exports = {select, getCount};