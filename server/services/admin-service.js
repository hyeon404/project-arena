const logger = require('../utils/logger');

const serverConfigService = require('./server-config-service')

const adminService = {
    async reloadConfig(key, res) {
        const [beforeConfig, afterConfig] = await serverConfigService.setConfig(key);
        logger.log(`server config swapped key : ${key},  : ${beforeConfig} -> ${afterConfig}`);
        res.send()
    },
    async reloadConfigAll(res) {
        const [beforeConfigs, afterConfigs] = await serverConfigService.setConfig();
        logger.log(`server config swapped : ${JSON.stringify([...beforeConfigs])} -> ${JSON.stringify([...afterConfigs])}`);
        res.send()
    },
};

module.exports = adminService;