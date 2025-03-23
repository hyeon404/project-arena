const express = require('express');
const router = express.Router();

const auth = require('../services/auth-service');

const {registerSchema} = require('../validators/user-validator');
const validateBody = require('../middlewares/validate-body')

router.post('/register', validateBody(registerSchema), (req, res) => {
    auth.register(req.body, res);
});

router.post('/login', validateBody(registerSchema), (req, res) => {
    auth.login(req.body, res);
})

module.exports = router;