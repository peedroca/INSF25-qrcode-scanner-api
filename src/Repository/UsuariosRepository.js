import connection from "./connection.js";

export async function criarUsuario(usuario) {
  try {
    const { nome, email, senha, tipo } = usuario;

    const query = `
      INSERT INTO usuarios (nome, email, senha, tipo)
      VALUES (?, ?, MD5(?), ?)
    `;

    const [resultado] = await connection.query(query, [
      nome,
      email,
      senha,
      tipo
    ]);

    return { id: resultado.insertId, nome, email, tipo };
  } 
  
  catch (error) {
    throw new Error("Erro ao criar usuário: " + error.message);
  }
}

export async function deletarUsuario(id) {
  try {
    const query = `DELETE FROM usuarios WHERE id = ?`;
    const [resultado] = await connection.query(query, [id]);

    if (resultado.affectedRows === 0) {
      throw new Error("Usuário não encontrado");
    }

    return { message: "Usuário deletado com sucesso" };
  } 
  
  catch (error) {
    throw new Error("Erro ao deletar usuário: " + error.message);
  }
}

export async function buscarUsuarioPorCredenciais(email, senha) {
  try {
    const query = `
      SELECT id, nome, email, tipo
      FROM usuarios
      WHERE email = ? AND senha = MD5(?)
    `;

    const [resultados] = await connection.query(query, [email, senha]);
    return resultados[0];
  } 
  
  catch (error) {
    throw new Error("Erro ao buscar usuário: " + error.message);
  }
}

export async function listarUsuarios() {
  try {
    const [usuarios] = await connection.query(`
      SELECT id, nome, email, tipo, created_at
      FROM usuarios
    `);
    return usuarios;
  } 
  
  catch (error) {
    throw new Error("Erro ao listar usuários: " + error.message);
  }
}
