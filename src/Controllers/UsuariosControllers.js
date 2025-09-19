import { Router } from "express";
import { buscarUsuarioPorCredenciais } from "../Repository/UsuariosRepository.js";
import { generateToken } from "../utils/jwt.js"

const endpoints = Router();

endpoints.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: "Email e senha são obrigatórios." });
    }

    const usuario = await buscarUsuarioPorCredenciais(email, senha);

    if (!usuario) {
      return res.status(401).json({ erro: "Credenciais inválidas." });
    }

    const token = generateToken({ id: usuario.id, tipo: usuario.tipo });

    res.status(200).json({
      mensagem: "Login realizado com sucesso",
      usuario,
      token
    });
  } 
  
  catch (err) {
    console.error("Erro no login:", err);
    res.status(500).json({ erro: "Erro interno no servidor." });
  }
});

export default endpoints;
