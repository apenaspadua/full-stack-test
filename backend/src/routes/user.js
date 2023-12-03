import { Router } from 'express';
import jwt from 'jsonwebtoken';
import models from '../models/index.js';

const router = Router();
const User = models.User;

// Rota para criar um usuário
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await User.create({ username, password });
    res.json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao criar usuário.');
  }
});

// Rota para obter um usuário pelo ID
router.get('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter usuário.');
  }
});

// Rota para atualizar informações do usuário
router.put('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, password } = req.body;

    const user = await User.findByPk(userId);

    if (user) {
      await user.update({ username, password });
      res.json({ message: 'Usuário atualizado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao atualizar usuário.');
  }
});

// Rota para excluir um usuário
router.delete('/:userId', async (req, res) => {
  try {
    const userId = req.params.userId;
    const user = await User.findByPk(userId);

    if (user) {
      await user.destroy();
      res.json({ message: 'Usuário excluído com sucesso.' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao excluir usuário.');
  }
});

// Rota para obter todos os usuários
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao obter usuários.');
  }
});

// Rota para autenticar usuário e obter token JWT
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username, password } });

    if (user) {
      const token = jwt.sign({ userId: user.id }, 'secretpassword', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao autenticar usuário.');
  }
});

export default router;
