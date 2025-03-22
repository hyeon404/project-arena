const express = require('express');
const router = express.Router();

const auth = require('../services/auth');

const {registerSchema} = require('../validators/userValidator');
const validateBody = require('../middlewares/validateBody')

router.post('/register', validateBody(registerSchema), (req, res) => {
    auth(req.body, res);
});

module.exports = router;