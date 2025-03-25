const joi = require('joi');

const passwordComplexity = (value, helpers) => {
    const hasAlphabet = /[a-zA-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecial = /[^a-zA-Z0-9]/.test(value);

    const conditionsMet = [hasAlphabet, hasNumber, hasSpecial].filter(Boolean).length;
    if( conditionsMet < 2 ) {
        return helpers.error('custom.type');
    }

    if( /(.)\1{2,}/.test(value) ) {
        return helpers.error('custom.sameLetter');
    }

    return value;
}

exports.registerSchema = joi.object({
    id: joi.string()
        .pattern(/^[a-zA-Z0-9]/)
        .min(4).max(20)
        .required(),
    password: joi.string()
        .min(8).max(32)
        .custom(passwordComplexity)
        .required()
});