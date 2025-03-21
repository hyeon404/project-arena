const express = require('express');
const router = express.Router();
const {StatusCodes} = require('http-status-codes');
const userRepo = require('../repositories/user');
const logger = require('../utils/logger');

router.post('/register', (req, res) => {
    userRepo.existUser(req.body.id).then((user) => {
        res.send({user});
        res.end();
    })
});

module.exports = router;