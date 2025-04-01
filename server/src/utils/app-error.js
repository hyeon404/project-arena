module.exports = class AppError extends Error {
    constructor(resultCode) {
        super(resultCode.message);
        this.resultCode = resultCode;
    }
}