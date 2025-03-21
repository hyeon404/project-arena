const express = require('express');
const router = express.Router();
const {StatusCodes} = require('http-status-codes');

router.post('/register', (req, res) => {
    res.end();
});

module.exports = router;