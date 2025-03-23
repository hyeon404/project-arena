const db = require('../query-templates/maria-query-template')
const logger = require('../../utils/logger')

const userDto = require('../../models/dtos/user-dto')

const userDao = {
    async existUser(id) {
        return Number(await db.getCount('SELECT COUNT(1) FROM USER WHERE ID=?', id)) > 0;
    },

    async nextVal() {
        return await db.nextval('USER_SEQ');
    },

    async createUser({id, password}, newSeq) {
        const query = "INSERT INTO USER(SEQ, UID, ID, PASSWORD) VALUES (?, CONCAT(DATE_FORMAT(NOW(), '%d%m%i%s'), LPAD(?%1000, 3, '0')), ?, ?)";
        return await db.insert(query, newSeq.toString(), newSeq.toString(), id, password);
    },

    async getUser({id, password}) {
        const query = "SELECT UID FROM USER WHERE ID=? AND PASSWORD=?";
        return new userDto(await db.selectOne(query, id, password));
    }
}


module.exports = userDao