module.exports = (schema) => {
    return ({body}, res, next) => {
        const {error} = schema.validate(body);
        if( error ) {
            console.log(error.message);
            return res.status(400).json( {message: error.message} );
        }
        next();
    }
}