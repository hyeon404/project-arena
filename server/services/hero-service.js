const logger = require('../utils/logger');

const heroService = {
    async getList(req, res) {
        // TODO 보유중인 전체 목록 조회 기능 추가, 기능 토글 추가
        res.send([]);
    },
    async getDetail(req, res) {
        // TODO 선택 대상 상세 데이터 조회 기능 추가, 기능 토글 추가
        res.send({});
    },
    async buyHero(req, res) {
        // TODO 미보유 대상을 선택하여 구매하는 기능 추가, 기능 토글 추가
        res.send({});
    }
}

module.exports = heroService;