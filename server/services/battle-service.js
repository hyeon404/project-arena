const logger = require('../utils/logger');

const battleService = {
    async getInfo(req, res) {
        // TODO 진행 가능 전투에 대한 목록
        res.send({});
    },
    async verifyResult(req, res) {
        // TODO 전투 로그 기반 검증 추가
        res.send({});
    }
}

module.exports = battleService;