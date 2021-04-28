/**
 * /routes/api/unitAmen-routes.js
 *
 * @description: the `/api/unit-amenities` endpoint
 *
 */

const router = require('express').Router();
const { UnitAmenities } = require('../../models');

// create unit amenities
router.post('/', async (req, res) => {
  try {
    const unitAmenitiesData = await UnitAmenities.create(req.body);
    res.status(200).json(unitAmenitiesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update one unit amenities
router.put('/:id', async (req, res) => {
  try {
    const unitAmenitiesData = await UnitAmenities.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!unitAmenitiesData) {
      res.status(404).json({ message: `No unit amenities with id: ${req.params.id}!` });
      return;
    } else {
      res.json(unitAmenitiesData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete unit amenities by id
router.delete('/:id', async (req, res) => {
  try {
    const unitAmenitiesData = await UnitAmenities.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!unitAmenitiesData) {
      res.status(404).json({ message: `No unit amenities found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(unitAmenitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
