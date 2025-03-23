const express = require('express');
const router = express.Router();

const adminService = require('../services/admin-service');

router.post('/reloadConfig', (req, res, next) => {
    if( req.body.key ) adminService.reloadConfig(req.body.key, res).catch(next);
    else adminService.reloadConfigAll(res).catch(next);
});

module.exports = router;