import {Response, Request} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response){
  
  const user = createUser({
    name: 'Ricardo',
    email: 'ricardo@server',
    password:'senha'
  })

  return response.json({message: "Olá mundo"})
}