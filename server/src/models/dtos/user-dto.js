const BaseDTO = require('./base-dto')

class UserDTO extends BaseDTO {
    constructor(dbRow) {
        super(dbRow, ['uid', 'id', 'password']);
    }

    toLoginJson() {
        return {
            uid: this.getUid()
        }
    }
}

module.exports = UserDTO;