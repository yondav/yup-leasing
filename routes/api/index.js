/**
 * /routes/index.js
 *
 * @description: endpoints
 *
 */

const router = require('express').Router();
const managementRoutes = require('./management-routes');
const buildingRoutes = require('./building-routes');
//  const tagRoutes = require('./tag-routes');

router.use('/management', managementRoutes);
router.use('/building', buildingRoutes);
//  router.use('/tags', tagRoutes);

module.exports = router;
