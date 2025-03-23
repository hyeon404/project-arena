const db = require('../query-templates/maria-query-template')

const ServerConfigDto = require('../../models/dtos/server-config-dto');

module.exports = {
    getAll: async () => {
        const rows = await db.select('SELECT CONFIG_KEY, CONFIG_VALUE FROM SERVER_CONFIG');
        return rows.map(row => new ServerConfigDto(row));
    },
    get: async (key) => {
        return new ServerConfigDto(await db.selectOne('SELECT CONFIG_KEY, CONFIG_VALUE FROM SERVER_CONFIG WHERE CONFIG_KEY=?', key));
    }
}