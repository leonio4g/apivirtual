const express = require('express')
 var bodyParser = require('body-parser')

const server  = express();

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json());

server.put('/changepass', (req,res) => {
    const password = "1234ab"

    const comparePass = req.body;
    if( comparePass.password === password) {
        return res.json(true)
    }else {
        return res.json(false)
    }
} )

server.listen(3000);