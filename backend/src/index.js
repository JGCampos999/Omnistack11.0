const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)
/* 
    Rota / Recurso

    Metodos HTTP:
    GET: Buscar uma informação do back
    POST: Criar uma informação no back
    PUT: Alterar uma informação no back
    DELETE: Deletar uma informação no back

    Tipos de parâmetros:
    Query: Parametros nomeados enviados na rota após ? (filtros, paginação)
    Route: Parametros utilizados para identificar recursos (busca dados de um unico usuário)
    Request Body: Corpo da requisição, cria ou altera recursos
    
//app.get('/users/:id', (request, response) => {
// const params = request.query //query
app.post('/users', (request, response) => {
    // const params = request.params //route
    const body = request.body //body
    console.log(body)
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Japa'
    })
})*/
app.listen(3333)