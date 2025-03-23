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

module.exports = app;