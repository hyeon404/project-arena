const db = require('../databases/query-templates/maria-query-template')
const HeroSourceDTO = require('../models/dtos/hero-source-dto');

class HeroLoader {
    heroMap = new Map();
    loaded = false;

    constructor () {
        db.select("SELECT SEQ, NAME, ATK, DEF FROM SOURCE_HERO").then(res => {
            this.loaded = true;
            for( let row of res ) {
                let info = new HeroSourceDTO(row);
                this.heroMap.set(info.getSeq(), info);
            }
        })
    }

    getAll() {
        if( !this.loaded ) return null;
        return this.heroMap;
    }

    get(seq) {
        if( !this.loaded ) return null;
        return this.heroMap.get(seq);
    }
}

module.exports = new HeroLoader();