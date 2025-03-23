const logger = require('../utils/logger');

const heroService = {
    async getList(req, res) {
        res.send([]);
    },
    async getDetail(req, res) {
        res.send({});
    },
    async buyHero(req, res) {
        res.send({});
    }
}

module.exports = heroService;