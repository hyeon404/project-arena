const serverConfigDao = require('../databases/daos/server-config-dao');

let cache = new Map();

const serverConfigService = {
    async getConfig(key) {
        if( cache.has(key) ) return cache.get(key);
        return null;
    },
    async setConfig(key) {
        if( !key ) {
            const configs = await serverConfigDao.getAll();

            let beforeConfigs = cache;
            let swapConfigs = new Map();

            for( const config of configs ) {
                swapConfigs.set(config.getConfigKey(), config.getConfigValue());
            }

            cache = swapConfigs;

            return [beforeConfigs, swapConfigs];
        }
        else {
            const config = await serverConfigDao.get(key);

            let beforeConfig = await this.getConfig(key);

            cache.set(key, config.getConfigValue());

            return [beforeConfig, config.getConfigValue()];
        }
    }
}

module.exports = serverConfigService;