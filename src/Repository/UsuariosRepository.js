import { connection } from './connection.js'

export async function criarUsuario(usuario) {
    try {
        const { nome, email, senha, tipo } = usuario
        
        const query = 'INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)'
        const [resultado] = await connection.execute(query, [nome, email, senha, tipo])
        
        return { id: resultado.insertId, nome, email, tipo }
    } catch (error) {
        throw new Error('Erro ao criar usuário: ' + error.message)
    }
}

export async function deletarUsuario(id) {
    try {
        const query = 'DELETE FROM usuarios WHERE id = ?'
        const [resultado] = await connection.execute(query, [id])
        
        if (resultado.affectedRows === 0) {
            throw new Error('Usuário não encontrado')
        }
        
        return { message: 'Usuário deletado com sucesso' }
    } catch (error) {
        throw new Error('Erro ao deletar usuário: ' + error.message)
    }
}
