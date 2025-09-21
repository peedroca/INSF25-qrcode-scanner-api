import { Router } from "express";
import { getAuthentication } from '../utils/jwt.js'
import { buscarEstatisticasPorLocal, inserirVisita, limparTodasVisitas } from '../Repository/VisitasRepository.js';

const endpoints = Router();
const auth = getAuthentication();

endpoints.post('/visitas', auth,  async (req, res) => {
  try {
    const dados = req.body;
    if (!dados.codigo || !dados.sala) {
      return res.status(400).json({ error: "codigo e sala são obrigatórios." });
    }

    const visita = await inserirVisita(dados);
    res.status(201).json(visita);

  } 
  
  catch (err) {
    console.error("Erro ao registrar visita:", err);
    res.status(500).json({ error: "Erro ao registrar visita." });
  }
});

endpoints.get('/estatisticas', auth, async (req, res) => {
  try {
    const resultados = await buscarEstatisticasPorLocal();
    res.json(resultados);
  } 
  
  catch (err) {
    console.error("Erro ao buscar estatísticas:", err);
    res.status(500).json({ error: "Erro ao buscar estatísticas" });
  }
});

endpoints.delete('/estatisticas', auth, async (req, res) => {
  try {
    const resultado = await limparTodasVisitas();
    res.json(resultado);
  } 
  
  catch (err) {
    console.error("Erro ao limpar visitas:", err);
    res.status(500).json({ error: "Erro ao limpar visitas." });
  }
});

export default endpoints;
