const express = require('express');
const app = express();
const cors = require('cors');

const auth = require('./routers/auth-router');

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));
app.use(express.json());

app.use('/auth', auth);

module.exports = app;