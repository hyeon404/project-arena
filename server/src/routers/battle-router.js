const express = require('express');
const router = express.Router();

const battleService = require('../services/battle-service');

router.get('/info', (req, res, next) => {
    battleService.getInfo(req, res).catch(next);
});

router.post('/verifyResult', (req, res, next) => {
    battleService.verifyResult(req, res).catch(next);
})

module.exports = router;