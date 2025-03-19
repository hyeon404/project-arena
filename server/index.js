const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.listen(port);

app.get('/', (req, res) => {
    res.end('Hello world')
})