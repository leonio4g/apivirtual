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
})

server.get('/services', (req, res) => {
    const services = [
        {
            id: 1,
            title: "Agendamento",
            description: "Marque consultas rapidamente"
        },
        {
            id: 2,
            title: "Teleconsultas",
            description: "Faça sua consulta de casa."
        }
    ];

    return res.json({services});
})
const PORT = process.env.PORT || 8000;

server.listen(PORT);