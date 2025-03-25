const logger = require('../utils/logger');
const userDao = require('../databases/daos/user-dao')
const response = require('../common/response');
const ResultCode = require("../common/result-code");
const AppError = require("../utils/app-error");

const authService = {
    async register(reqData, res) {
        // TODO 패스워드 암호화 기능 추가, 기능 토글 추가
        const isExist = await userDao.existUser(reqData.id);

        if( isExist ) {
            return res.json(response(ResultCode.ALREADY_USE_ID));
        }

        const newSeq = await userDao.nextVal();
        const result = await userDao.createUser(reqData, newSeq);

        logger.log(`${reqData.id} user insert query result = ${result.affectedRows} / ${result.warningStatus}`)

        res.json(response(ResultCode.OK));
    },

    async login(reqData, res) {
        // TODO 토큰 발행기능 추가, 기능 토글 추가
        try {
            const user = await userDao.getUser(reqData);

            res.json(response(ResultCode.OK, user.toLoginJson()));
        } catch (err) {
            if( err instanceof AppError ) {
                return res.json(response(ResultCode.NOT_FOUND_USER));
            }
            throw err;
        }
    }
}

module.exports = authService;