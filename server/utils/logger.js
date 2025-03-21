// 향후 file logger로 별도 구성

function log(msg) {
    console.log(msg);
}

function error(msg) {
    console.error(msg);
}

module.exports = {log, error};