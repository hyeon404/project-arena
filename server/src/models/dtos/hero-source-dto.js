const BaseDTO = require('./base-dto')

class HeroSourceDTO extends BaseDTO {
    constructor(dbRow) {
        super(dbRow, ['seq', 'name', 'atk', 'def']);
    }

    toJson() {
        return {
            seq: this.getSeq(),
            name: this.getName(),
            atk: this.getAtk(),
            def: this.getDef()
        }
    }
}

module.exports = HeroSourceDTO;