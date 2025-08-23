import mysql from 'mysql2/promise'
import 'dotenv/config'

const connection = await mysql.createConnection(process.env.DATABASE_URL)

console.log('Banco de Dados Subiu!')

export default connection