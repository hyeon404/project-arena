const express = require('express');
const router = express.Router();

const heroService = require('../services/hero-service');

router.get('/list', (req, res, next) => {
    heroService.getList(req, res).catch(next);
});

router.get('/:id/detail', (req, res, next) => {
    heroService.getDetail(req, res).catch(next);
});

router.post('/:id/buy', (req, res, next) => {
    heroService.buyHero(req, res).catch(next);
});

module.exports = router;