const ResultCode = require('../../common/result-code');
const AppError = require('../../utils/app-error');

class BaseDTO {
    constructor(dbRow, fields) {
        if( !dbRow ) throw new AppError(ResultCode.NOT_FOUND_DATA);
        for( const [key, value] of Object.entries(dbRow) ) {
            const normalizedKey = key.toLowerCase().replace(/_([a-z])/g, (_, c) => c.toUpperCase());
            if( fields.includes(normalizedKey) ) {
                this[normalizedKey] = value;
            }

            Object.defineProperty(this, `#${normalizedKey}`, {value: this[normalizedKey], writable: false});
            Object.defineProperty(this, 'get' + normalizedKey.charAt(0).toUpperCase() + normalizedKey.slice(1),
                {value: () => this[`#${normalizedKey}`],
                    writable: false,
                    enumerable: false}
            );
        }

        for( const key of fields ) {
            delete this[key];
        }
    }
}

module.exports = BaseDTO;