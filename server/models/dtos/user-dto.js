const BaseDTO = require('./base-dto')

class UserDTO extends BaseDTO {
    constructor(dbRow) {
        super(dbRow, ['uid', 'id', 'password']);
    }
}

module.exports = UserDTO;