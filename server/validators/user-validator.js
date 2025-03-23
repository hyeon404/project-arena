const joi = require('joi');

const passwordComplexity = (value, helpers) => {
    const hasAlphabet = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(value);

    const conditionsMet = [hasAlphabet, hasNumber, hasSpecial].filter(Boolean).length;
    if( conditionsMet < 2 ) {
        return helpers.message('비밀번호는 영문, 숫자, 특수문자 중 2가지 이상을 포함해야 합니다.')
    }

    if( /(.)\1{2,}/.test(value) ) {
        return helpers.message('같은 문자를 3번 이상 반복할 수 없습니다.')
    }

    return value;
}

exports.registerSchema = joi.object({
    id: joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .min(4).max(20)
        .required()
        .messages({}),
    password: joi.string()
        .min(8).max(32)
        .custom(passwordComplexity)
        .required()
        .messages({})
});