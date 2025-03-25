const ResultCode = require("../common/result-code");
const response = require('../common/response')

module.exports = (schema) => {
    return ({body}, res, next) => {
        const {error} = schema.validate(body);
        if( error ) {
            const [detail] = error.details;
            switch(detail.path[0]) {
                case 'id':
                    switch(detail.type) {
                        case 'string.min':
                        case 'string.max':
                            return res.json(response(ResultCode.ID_LENGTH));
                        case 'any.required':
                            return res.json(response(ResultCode.ID_REQUIRED))
                    }
                    break;
                case 'password':
                    switch(detail.type) {
                        case 'string.min':
                        case 'string.max':
                            return res.json(response(ResultCode.PW_LENGTH));
                        case 'any.required':
                            return res.json(response(ResultCode.PW_REQUIRED));
                        case 'custom.type':
                            return res.json(response(ResultCode.PW_TYPE));
                        case 'custom.sameLetter':
                            return res.json(response(ResultCode.PW_SAME_LETTER));
                    }
                    break;
            }
            return res.json();
        }
        next();
    }
}