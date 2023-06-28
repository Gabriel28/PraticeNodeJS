require('dotenv').config({path: '.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('cors');

const routes = require('./routes');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.listen(process.env.PORTS, () => {
    console.log(`Rodando em => http://${hostname}:${process.env.PORTS}/`)
})

server.get('/', (req, res) => {
    res.end(`Start OK no ${process.env.SERV_NAME} Land`);
})
