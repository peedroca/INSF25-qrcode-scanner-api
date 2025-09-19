import mysql from 'mysql2/promise'
import 'dotenv/config'

const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'qrdb2'
})

console.log('Banco de Dados Subiu!')

export default connection