import server from './src/server.js'

const PORT = process.env.PORTA

server.listen(PORT, () => {
  console.log(`Servidor rodando localmente na porta ${PORT}`)
})