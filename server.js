/**
 * server.js
 *
 * @description: server
 *
 */

const path = require('path');
const express = require('express');
const { sequelize } = require('./models/Building');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 5000;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
