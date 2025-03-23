const db = require('../query-templates/maria-query-template')
const logger = require('../../utils/logger')

const userDao = {
    async existUser(id) {
        return Number(await db.getCount('select count(1) from USER where ID=?', id)) > 0;
    },

    async nextVal() {
        return await db.nextval('USER_SEQ');
    },

    async createUser({id, password}, newSeq) {
        const query = "INSERT INTO USER(seq, uid, id, PASSWORD) VALUES (?, concat(DATE_FORMAT(NOW(), '%d%m%i%s'), LPAD(?%1000, 3, '0')), ?, ?)";
        return await db.insert(query, newSeq.toString(), newSeq.toString(), id, password);
    }
}


module.exports = userDao