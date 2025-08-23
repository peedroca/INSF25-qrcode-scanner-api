import server from './src/server.js'

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`Servidor rodando localmente na porta ${PORT}`)
})