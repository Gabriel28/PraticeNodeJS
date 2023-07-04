require('dotenv').config({path: '.env'});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const routes = require('./routes');

const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));
server.listen(process.env.PORT, () => {
    console.log(`Rodando em => http://${process.env.URL_BASE}:${process.env.PORT}`)
})

server.use('/api', routes); 

server.get('/', (req, res) => {
    res.end(`Start OK no ${process.env.SERV_NAME} Land`);
})
