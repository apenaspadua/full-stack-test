import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { config } from 'dotenv';

import models from './models/index.js';
import userRoutes from './routes/user.js';
import punkApiRoutes from './routes/punkApi.js';

config();

const app = express();
const sequelize = models.sequelize;

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/punk-api', punkApiRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
