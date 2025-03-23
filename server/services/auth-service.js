const logger = require('../utils/logger');
const userDao = require('../databases/daos/user-dao')

const authService = {
    async register(reqData, res) {
        const isExist = await userDao.existUser(reqData.id);

        if( isExist ) {
            return res.send('이미 사용중인 ID 입니다.');
        }

        const newSeq = await userDao.nextVal();

        const result = await userDao.createUser(reqData, newSeq);

        logger.log(`${reqData.id} user insert query result = ${result.affectedRows} / ${result.warningStatus}`)

        res.send('계정 생성 성공');
    },

    async login(reqData, res) {
        const user = await userDao.getUser(reqData);

        res.json(user.toLoginJson());
    }
}

module.exports = authService;