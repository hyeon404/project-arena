const express = require('express');
const router = express.Router();

const heroService = require('../services/hero-service');

router.get('/list', (req, res) => {
    heroService.getList(req, res);
});

router.get('/:id/detail', (req, res) => {
    heroService.getDetail(req, res);
});

router.post('/:id/buy', (req, res) => {
    heroService.buyHero(req, res);
});

module.exports = router;