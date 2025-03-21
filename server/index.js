const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

const auth = require('./controller/auth');

require('dotenv').config({path:`.env.${process.env.NODE_ENV|| 'dev'}`});
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
}

app.use(cors(corsOptions));

app.use('/', router);
app.use('/auth', auth);

const port = 8080;

app.listen(port);