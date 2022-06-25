require('express-async-errors')

const AppError = require('./utils/AppError')

const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes)

app.use((error, request, response, next) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  console.error(error)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error'
  })
})

const PORT = 3333

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*******************************************************************************************************************************************

/*Exemplo de  REQUEST PARAMS E REQUEST QUERY usando o método GET *****************************************

//app.get("/message/:id/:user", (request, response)=>{ const {id, user}= request.params
 response.send(`Mensagem ID: ${id}. Nome do usuário : ${user}.`)})//

//app.get("/users", (request, response)=>{ 
  const{page, limit, title}= request.query 
  response.send(`Página: ${page}.  Mostrar${limit} Titulo${title}`)});//

//*** FIM DO EXEMPLO  */
