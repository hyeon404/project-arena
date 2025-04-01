// 향후 file logger로 별도 구성

function log(msg, ...args) {
    const arr = [];
    for( let arg of args ) {
        if( typeof arg === 'map' ) arr.push(JSON.stringify(...arg));
        else arr.push(arg);
    }
    console.log(msg, ...arr);
}

function error(msg, ...args) {
    const arr = [];
    for( let arg of args ) {
        if( typeof arg === 'map' ) arr.push(JSON.stringify(...arg));
        else arr.push(arg);
    }
    console.error(msg, ...arr);
}

module.exports = {log, error};