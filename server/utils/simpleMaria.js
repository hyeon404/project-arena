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

const method = {
    async select(query, ...args) {
        let conn;
        try {
            conn = await pool.getConnection();
            return await conn.query(query, args);
        } catch (err) {
            logger.error(err);
            logger.error(err.stack);
        } finally {
            if( conn ) conn.release()
        }
    },

    async selectOne(query, ...args) {
        return await this.select(query, args)[0];
    },

    async getCount(query, ...args) {
        return Object.values(await this.select(query, args)[0])[0];
    }
}

module.exports = method