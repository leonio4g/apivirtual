# Api virtual

Dados iniciais das telas de agendamentos.

/recipient - rota retorna os beneficiarios

return : 

id: number,\
name: string,\
state : string

/services - rota retorna os serviços

return : 

id: number,\
description: string,\
tp_antendimento: string,

/schedules - rota retorna a lista de agendamentos

return :

id: number,\
type_services: string,\
date: string,\
time: string,\
status: string,