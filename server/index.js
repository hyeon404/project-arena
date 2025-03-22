require('dotenv').config({path:`.env.${process.env.NODE_ENV|| 'dev'}`});

const app = require('./app');

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});