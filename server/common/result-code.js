module.exports = class ResultCode {
    constructor(code, msg) {
        this.code = code;
        this.message = msg;
    }

    // success
    static OK = new ResultCode('0000', 'success');

    // validator errors
    // auth error
    static ID_REQUIRED = new ResultCode('1000', 'id-required');
    static ID_LENGTH = new ResultCode('1000', 'id-length');
    static ID_REGEX = new ResultCode('1000', 'id-regex');

    static PW_REQUIRED = new ResultCode('1001', 'pw-required');
    static PW_LENGTH = new ResultCode('1001', 'pw-length');
    static PW_TYPE = new ResultCode('1001', 'pw-type');
    static PW_SAME_LETTER = new ResultCode('1001', 'pw-same-letter');


    // business errors
    // auth error
    static REGISTER_ERROR = new ResultCode('2000', 'invalid-error');
    static ALREADY_USE_ID = new ResultCode('2000', 'already-use-id');
    static NOT_FOUND_USER = new ResultCode('2001', 'not-found-user');


    // service error
    static NOT_FOUND_DATA = new ResultCode('9000', 'not-found-data');
}