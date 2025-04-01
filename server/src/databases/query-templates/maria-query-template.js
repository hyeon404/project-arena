const connectionPool = require('../datasources/maria-datasource')

const logger = require('../../utils/logger');

const query = {
    async execute(query, ...args) {
        let conn;
        try {
            conn = await connectionPool.getConnection();
            return await conn.query(query, args);
        } catch (err) {
            logger.error(err);
            logger.error(err.stack);
        } finally {
            if( conn ) conn.release()
        }
    },
    async select(query, ...args) {
        return await this.execute(query, ...args);
    },

    async selectOne(query, ...args) {
        return (await this.select(query, ...args))[0];
    },

    async getCount(query, ...args) {
        return Object.values(await this.selectOne(query, ...args))[0];
    },

    async nextval(sequence) {
        return await this.getCount(`select nextval(${sequence})`);
    },

    async insert(query, ...args) {
        return await this.execute(query, ...args);
    }
}

module.exports = query