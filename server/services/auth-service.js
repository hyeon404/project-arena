const logger = require('../utils/logger');
const userDao = require('../databases/daos/user-dao')

const authService = {
    async register(reqData, res) {
        // TODO 패스워드 암호화 기능 추가, 기능 토글 추가
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
        // TODO 토큰 발행기능 추가, 기능 토글 추가
        try {
            const user = await userDao.getUser(reqData);

            res.json(user.toLoginJson());
        } catch (err) {
            err.message = "유저 정보가 없습니다.";
            throw err;
        }
    }
}

module.exports = authService;