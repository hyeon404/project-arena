const express = require('express');
const router = express.Router();

const battleService = require('../services/battle-service');

router.get('/info', (req, res) => {
    battleService.getInfo(req, res);
});

router.post('/verifyResult', (req, res) => {
    battleService.verifyResult(req, res);
})

module.exports = router;