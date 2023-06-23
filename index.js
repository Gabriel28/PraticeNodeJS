const express = require('express');
const app = express();
const hostname = 'localhost'
const port = process.env.PORT || 3000

app.get("/", (req, res) => {
    res.end(`Start OK no ${process.env.SERV_NAME} Land`);
})

app.listen(port, () => {
    console.log(`Rodando em => http://${hostname}:${port}/`)
})