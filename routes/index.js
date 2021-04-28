/**
 * /routes/index.js
 *
 * @description: the route to `/api/` endpoints
 *
 */

const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send('<h1>check the api dog</h1>');
});

module.exports = router;
