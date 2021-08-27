const express = require('express')
 var bodyParser = require('body-parser')

const server  = express();

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json());

server.put('/changepass', (req,res) => {
    const password = "1234ab"

    const comparePass = req.body;
    if( comparePass.password === password) {
        return res.json({status: true, comparePass})
    }else {
        return res.json({status : false, comparePass})
    }
})

server.get('/services', (req, res) => {
    const services = [
        {
            title: "Agendamento",
            description: "Marque consultas rapidamente",
            icon: "icomoom/iconAgendamento"
        },
        {
            title: "Teleconsultas",
            description: "Faça sua consulta de casa.",
            icon: "icomoom/iconAgendamento"
        }
    ];

    return res.json({services});
})

server.get('/banner', (req, res) => {
    const banners = [
        {
          title: '',
          image: 'https://i.imgur.com/UhCwg59.jpg'
        },
        {
          title: '',
          image: 'https://i.imgur.com/mdMPx5l.jpg'
        },
        {
          title: '',
          image: 'https://i.imgur.com/li9mxLH.jpg'
        },
        {
          title: '',
          image: 'https://i.imgur.com/0CsYHbm.jpg'
        },
      ]

      return res.json({banners})
})
const PORT = process.env.PORT || 8000;

server.listen(PORT);