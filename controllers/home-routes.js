const router = require('express').Router();

const { Management } = require('../models');

// input listing
router.get('/new-listing', async (req, res) => {
  try {
    const mgmtCompanies = await Management.findAll().catch((err) => {
      res.json(err);
    });
    const mgmt = mgmtCompanies.map((m) => m.get({ plain: true }));
    res.render('new-listing', { mgmt });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
