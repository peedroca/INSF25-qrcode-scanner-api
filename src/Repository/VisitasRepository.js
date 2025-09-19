import connection from "./connection.js";

export async function inserirVisita(dados) {
  try {
    const agora = new Date();

    const [resultados] = await connection.query(
      `INSERT INTO visitas (codigo, sala, data) VALUES (?, ?, ?)`,
      [dados.codigo, dados.sala, agora]
    );

    return {
      id: resultados.insertId,
      codigo: dados.codigo,
      sala: dados.sala,
      data: agora
    };
  } 
  
  catch (err) {
    console.error("Erro ao inserir visita:", err);
    throw err;
  }
}

export async function buscarEstatisticasPorLocal() {
  try {
    const [rows] = await connection.query(
      `SELECT sala, codigo, data
       FROM visitas
       ORDER BY data DESC`
    );

    return rows;
  } 
  
  catch (err) {
    console.error("Erro ao buscar estatísticas por local:", err);
    throw err;
  }
}

export async function limparTodasVisitas() {
  try {
    await connection.query(`DELETE FROM visitas`);
    return { message: "Todas as visitas foram removidas com sucesso." };
  } 
  catch (err) {
    console.error("Erro ao limpar visitas:", err);
    throw err;
  }
}
