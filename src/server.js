import cors from 'cors'
import express from 'express'
import Roteamento from '../Rotas.js'

const server = express()

server.use(express.json())

server.use(cors())

Roteamento(server)

export default server;