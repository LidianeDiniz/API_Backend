const express = require('express')

const routes = require('./routes')

const app = express()

app.use(express.json())

app.use(routes)

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
