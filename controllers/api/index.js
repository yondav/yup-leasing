/**
 * /routes/index.js
 *
 * @description: endpoints
 *
 */

const router = require('express').Router();
const managementRoutes = require('./management-routes');
const buildingRoutes = require('./building-routes');
// const buildingAmenRoutes = require('./buildingAmen-routes');
const unitRoutes = require('./unit-routes');
// const unitAmenRoutes = require('./unitAmen-routes');

router.use('/management', managementRoutes);
router.use('/building', buildingRoutes);
// router.use('/building-amenities', buildingAmenRoutes);
router.use('/unit', unitRoutes);
// router.use('/unit-amenities', unitAmenRoutes);

module.exports = router;
