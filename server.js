/**
 * server.js
 *
 * @description: server
 *
 */

const express = require('express');
const { sequelize } = require('./models/Building');
const routes = require('./controllers');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
