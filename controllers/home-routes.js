const router = require('express').Router();

// input listing
router.get('/new-listing', async (req, res) => {
  try {
    res.render('new-listing');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
