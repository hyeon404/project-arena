const userRepo = require('../repositories/userRepo')

const auth = {
    async register(reqData, res) {
        const isExist = await userRepo.existUser(reqData.id);

        if( isExist ) {
            return res.send('이미 사용중인 ID 입니다.');
        }

        //

        res.send('계정 생성 성공');
    }
}

module.exports = auth;