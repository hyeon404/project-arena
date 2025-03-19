const express = require('express');
const app = express();
const {StatusCodes} = require('http-status-codes');

const port = process.env.PORT || 8080;
app.listen(port);

app.get('/health', (req, res) => {
    res.status(StatusCodes.OK).end('OK');
})

app.get('/error', (req, res) => {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).end();
})

app.get('/not-found', (req, res) => {
    res.status(StatusCodes.NOT_FOUND).end();
})