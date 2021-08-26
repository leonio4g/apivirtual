const express = require('express')
 var bodyParser = require('body-parser')

const server  = express();

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json());

server.put('/changepass', (req,res) => {
    const password = "1234ab"

    const comparePass = req.body;
    if( comparePass.password === password) {
        return res.json({status: true})
    }else {
        return res.json({status : false})
    }
} )
const PORT = process.env.PORT || 8000;

server.listen(PORT);