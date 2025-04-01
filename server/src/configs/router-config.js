const authRouter = require('../routers/auth-router');
const heroRouter = require('../routers/hero-router');
const battleRouter = require('../routers/battle-router');

const adminRouter = require('../routers/admin-router');

module.exports = (app) => {
    app.use('/auth', authRouter);
    app.use('/hero', heroRouter);
    app.use('/battle', battleRouter);

    app.use('/admin', adminRouter);
}