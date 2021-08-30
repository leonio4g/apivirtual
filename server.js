const express = require('express');
const bodyParser = require('body-parser');
const swagger = require('swagger-ui-express');
const cors = require("cors");
const swaggerDocs = require('./swagger.json');
const server  = express();

server.use(bodyParser.urlencoded({ extended: false }))

server.use(express.json());
server.use(cors());

server.use('/api-docs', swagger.serve, swagger.setup(swaggerDocs))

server.put('/change_pass', (req,res) => {
    const password = "1234ab"

    const comparePass = req.body.password;
    if( comparePass === password) {
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
});

server.get('/wallet', (req, res) => {
  const items= [
    {
      nom_plano_ans: "UNIV I BAS/ESP-IND/FAM- ADAPT",
      tipo_regulamentacao: "Adaptado",
      registro_ans: "0151",
      abrangencia_geografica: "Nacional",
      segmentacao_assistencial: "Ambulatorial + Hospitalar com obstetrícia",
      tipo_de_contratacao: "Individual ou familiar",
      nome: "MARIA SOUSA COSTA",
      nasc: "1980-05-22T03:00:00Z",
      cpf: "12345678978",
      cns: 708009362338726,
      cdcontratante: 84315,
      cdmodalidade: 2,
      cdplano: 1,
      nrproposta: 12749,
      cdtipoplano: 3,
      nrinsccontrante: 84315,
      nrinsccontranteorigem: 0,
      cdcontratoorigem: 0,
      idplanoans: 24,
      cdformapagamento: 1,
      nrtermoadesaoproposta: 12749,
      cdtipocontratacao: 1,
      mesultimoreajuste: 1,
      cdregistroplano: 1,
      dtalteracaoregulamentacao: "2011-08-01T03:00:00Z",
      matricula: 201274900039,
      nrteradesao: 12749,
      via: 1,
      validade: "2022-07-31T03:00:00Z",
      inclusao: "1995-01-08T03:00:00Z",
      possuicarencia: 0,
      possuibonificapenaliza: 0,
      cdusuario: 3,
      cdunimed: 33,
      cdunimedorigem: 0,
      cdunimeddestino: 0,
      cdfuncionario: " ",
      cdgrauparentesco: 1,
      cdsegmentoassistencial: 6,
      usuidplanoans: 24,
      dtexclusaoplano: null,
      cdsexo: 0,
      nrdias: 0,
      cdtitular: 3,
      nrtelefone1: "084968113-4874",
      nrtelefone2: " ",
      email: " ",
      cdviatransferencia: "N",
      dtiniciovinculo: "1995-01-08T03:00:00Z",
      cdclassemensagem: 2,
      dtiniciotermoadesao: "1995-01-08T03:00:00Z",
      dsendereco: "AVENIDA EPITACIO PESSOA, 903",
      nrendereco: 903,
      cep: "68906812",
      dscomplemento: " ",
      dsbairro: "CABRALZINHO",
      uf: "AP",
      cidade: "MACAPA",
      convenioanscontratada: "321044",
      layoutcartaovirtual: "BENEFICIARIO",
      seed: "LBKUMSDKOJKFUUSUJNIUYTSRGN4HKNSC",
      unimedcontratada: "UNIMED JOÃO PESSOA",
      nomecartao: "MARILES S S F DA COSTA",
      nomesocialcartao: "MARIA SOUSA COSTA",
      cd_unimed: 33,
      cd_carteira_inteira: 201274900039,
      rdatendimento: "NAO BASICA",
      acomodacao: "INDIVIDUAL",
      atendimento: 0033,
      cobparctemp: "NAO HA",
    },
    {
      nom_plano_ans: "UNIV I BAS/ESP-IND/FAM- ADAPT",
      tipo_regulamentacao: "Adaptado",
      registro_ans: "0151",
      abrangencia_geografica: "Nacional",
      segmentacao_assistencial: "Ambulatorial + Hospitalar com obstetrícia",
      tipo_de_contratacao: "Individual ou familiar",
      nome: "MARILES SOUSA SANTOS FALCONI DA COSTA",
      nasc: "1965-06-18T03:00:00Z",
      cpf: "51156547415",
      cns: 708009362338726,
      cdcontratante: 84315,
      cdmodalidade: 2,
      cdplano: 1,
      nrproposta: 12749,
      cdtipoplano: 3,
      nrinsccontrante: 84315,
      nrinsccontranteorigem: 0,
      cdcontratoorigem: 0,
      idplanoans: 24,
      cdformapagamento: 1,
      nrtermoadesaoproposta: 12749,
      cdtipocontratacao: 1,
      mesultimoreajuste: 1,
      cdregistroplano: 1,
      dtalteracaoregulamentacao: "2011-08-01T03:00:00Z",
      matricula: 201274900039,
      nrteradesao: 12749,
      via: 1,
      validade: "2022-07-31T03:00:00Z",
      inclusao: "1995-01-08T03:00:00Z",
      possuicarencia: 0,
      possuibonificapenaliza: 0,
      cdusuario: 3,
      cdunimed: 33,
      cdunimedorigem: 0,
      cdunimeddestino: 0,
      cdfuncionario: " ",
      cdgrauparentesco: 1,
      cdsegmentoassistencial: 6,
      usuidplanoans: 24,
      dtexclusaoplano: null,
      cdsexo: 0,
      nrdias: 0,
      cdtitular: 3,
      nrtelefone1: "084968113-4874",
      nrtelefone2: " ",
      email: " ",
      cdviatransferencia: "N",
      dtiniciovinculo: "1995-01-08T03:00:00Z",
      cdclassemensagem: 2,
      dtiniciotermoadesao: "1995-01-08T03:00:00Z",
      dsendereco: "AVENIDA BEM-TE-VI, 903",
      nrendereco: 903,
      cep: "68906812",
      dscomplemento: " ",
      dsbairro: "CABRALZINHO",
      uf: "AP",
      cidade: "MACAPA",
      convenioanscontratada: "321044",
      layoutcartaovirtual: "BENEFICIARIO",
      seed: "LBKUMSDKOJKFUUSUJNIUYTSRGN4HKNSC",
      unimedcontratada: "UNIMED JOÃO PESSOA",
      nomecartao: "MARILES S S F DA COSTA",
      nomesocialcartao: "MARILES SOUSA SANTOS FALCONI DA COSTA",
      cd_unimed: 33,
      cd_carteira_inteira: 201274900039,
      rdatendimento: "NAO BASICA",
      acomodacao: "INDIVIDUAL",
      atendimento: 0033,
      cobparctemp: "NAO HA",
    }
  ];

  return res.json({items})
 
});

var codeValidation = '';
server.get('/generation_code', (req, res) =>{
  var code = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 6; i++){
    code += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  codeValidation = code;
  return res.json(codeValidation);
})

server.post('/code_validation', (req, res) => {
  const {code} = req.body;
  if(code === codeValidation){
    return res.json({status: true})
  }else{
    return res.json({status: false})
  }
})

server.put('/recovery_pass', (req, res) => {
  return res.json('Senha Alterada')
});


const PORT = process.env.PORT || 8000;

server.listen(PORT);