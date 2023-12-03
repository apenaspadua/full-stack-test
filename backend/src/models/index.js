import { Sequelize } from 'sequelize';
import { development } from '../config/database.js'
import User from './user.js';

const sequelize = new Sequelize(development);

const models = {
  User: User(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;

export default models;
