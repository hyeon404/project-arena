const simpleMaria = require('../utils/simpleMaria')
const logger = require('../utils/logger')

const userRepo = {
    async existUser(id) {
        let data = simpleMaria.getCount('select count(1) from USER where ID=?', id);

        return (Number(data) > 0);
    }
}


module.exports = userRepo