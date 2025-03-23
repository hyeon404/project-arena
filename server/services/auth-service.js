const userRepo = require('../databases/daos/user-dao')

const authService = {
    async register(reqData, res) {
        const isExist = await userRepo.existUser(reqData.id);

        if( isExist ) {
            return res.send('이미 사용중인 ID 입니다.');
        }

        const newSeq = await userRepo.nextVal();

        const result = await userRepo.createUser(reqData, newSeq);

        res.send('계정 생성 성공');
    }
}

module.exports = authService;