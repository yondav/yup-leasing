/**
 * /routes/api/buildingAmen-routes.js
 *
 * @description: the `/api/building-amenities` endpoint
 *
 */

const router = require('express').Router();
const { BuildingAmenities } = require('../../models');

// create building amenities
router.post('/', async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.create(req.body);
    res.status(200).json(buildingAmenitiesData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update one building amenities
router.put('/:id', async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!buildingAmenitiesData) {
      res.status(404).json({ message: `No building amenities with id: ${req.params.id}!` });
      return;
    } else {
      res.json(buildingAmenitiesData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete building amenities by id
router.delete('/:id', async (req, res) => {
  try {
    const buildingAmenitiesData = await BuildingAmenities.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!buildingAmenitiesData) {
      res.status(404).json({ message: `No building amenities found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingAmenitiesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
