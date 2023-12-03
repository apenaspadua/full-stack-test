import { Router } from 'express';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const router = Router();

// Middleware para verificar o token JWT
function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido.' });
  }

  jwt.verify(token, 'secretpassword', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: `Falha na autenticação do token: ${err.message}`});
    }
    req.userId = decoded.userId;
    next();
  });
}

// Rota protegida com autenticação JWT para obter dados da Punk API
router.get('/beers', verifyToken, async (req, res) => {
  try {
    const response = await axios.get('https://api.punkapi.com/v2/beers');
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter dados da Punk API.');
  }
});

export default router;
