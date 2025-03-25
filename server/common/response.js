module.exports = (status, data = null) => {
    return {
        code: status.code,
        message: status.message,
        data: data
    }
};
