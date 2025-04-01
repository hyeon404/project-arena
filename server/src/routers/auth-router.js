const express = require('express');
const router = express.Router();

const authService = require('../services/auth-service');

const {registerSchema} = require('../validators/user-validator');
const validateBody = require('../middlewares/validate-body')

router.post('/register', validateBody(registerSchema), (req, res, next) => {
    authService.register(req.body, res).catch(next);
});

router.post('/login', validateBody(registerSchema), (req, res, next) => {
    authService.login(req.body, res).catch(next);
})

module.exports = router;