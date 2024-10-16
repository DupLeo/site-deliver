const { Sequelize } = require('sequelize');
require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, async () => {
    console.log(`Server is running on port ${port}`);
    await retryConnection(5);
});

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: 3306
    }
);

const retryConnection = async (retries) => {
    while (retries > 0) {
      try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return;
      } catch (error) {
        console.error('Unable to connect to the database, retrying...', error);
        retries -= 1;
        await new Promise(res => setTimeout(res, 3000)); // Attendre 5 secondes avant de réessayer
      }
    }
    console.error('All retries failed.');
  };
  