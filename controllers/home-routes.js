const router = require('express').Router();

const { Management, Building } = require('../models');

// input management
router.get('/new-listing/management', async (req, res) => {
  try {
    const mgmtCompanies = await Management.findAll({ order: [['management_name', 'ASC']] });
    const mgmt = mgmtCompanies.map((m) => m.get({ plain: true }));
    res.render('new-listing-management', { mgmt });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get management by id for building list
router.get('/new-listing/management/buildings/:id', async (req, res) => {
  try {
    const mgmtBuildings = await Building.findAll({ where: { management_id: req.params.id } });
    const buildings = mgmtBuildings.map((building) => building.get({ plain: true }));
    res.render('new-listing-building', { buildings });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get management by user inputted management company name for building list
router.get('/new-listing/management/buildings/:name', async (req, res) => {
  try {
    const mgmtData = await Management.findAll({ where: { management_name: req.params.name } });
    const mgmt = mgmtData.get({ plain: true });
    console.log(mgmt);
    res.render('new-listing-building', { mgmt });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
