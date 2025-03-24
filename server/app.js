const express = require('express');
const app = express();
const cors = require('cors');
const routerConfig = require('./router-config')

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

routerConfig(app);

app.use((err, req, res, next) => {
    console.error('!Unhandled error occured', err.stack);
    res.status(err.status || 500).send({message: err.message || 'Internal error'});
})

module.exports = app;