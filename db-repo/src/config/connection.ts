import { Sequelize } from 'sequelize';
import { databaseConfig } from './database';

export const sequelize = new Sequelize(databaseConfig);

export const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    throw error;
  }
}; 