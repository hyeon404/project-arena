const BaseDTO = require('./base-dto')

class ServerConfigDTO extends BaseDTO {
    constructor(dbRow) {
        super(dbRow, ['configKey', 'configValue']);
    }
}

module.exports = ServerConfigDTO;