const simpleMaria = require('../utils/simpleMaria')
const logger = require('../utils/logger')

function existUser(id) {
    return simpleMaria.getCount('select count(1) from USER where ID=?', id).then(data => {
        if( data > 0 ) {
            logger.log('exist')
        }
        return Number(data);
    })
}

module.exports = {existUser}