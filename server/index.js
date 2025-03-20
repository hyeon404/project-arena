const express = require('express');
const app = express();
const mariadb = require('mariadb');

require('dotenv').config({path:`.env.${process.env.NODE_ENV|| 'dev'}`});

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    connectionLimit: 5
});

const port = 8080;
app.listen(port);

app.get('/test', (req, res) => {
    pool.getConnection().then(conn => {
        conn.query(`SELECT * FROM USER`).then(result => {
            console.log(result);
        }).catch(err => console.log(err));
        conn.end()

    }).catch(err => {
        console.log(err);
    })
    res.end();
})
