/**
 * /routes/api/building-routes.js
 *
 * @description: the `/api/building` endpoint
 *
 */

const router = require('express').Router();
const { Building, Management, Unit } = require('../../models');

// get all building companies
router.get('/', async (req, res) => {
  try {
    const buildingData = await Building.findAll({
      include: [
        { model: Management, as: 'management' },
        { model: Unit, as: 'units' },
      ],
    });
    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one building company
router.get('/:id', async (req, res) => {
  try {
    const buildingData = await Building.findByPk(req.params.id, {
      include: [
        { model: Management, as: 'management' },
        { model: Unit, as: 'units' },
      ],
    });

    if (!buildingData) {
      res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// create a building company
router.post('/', async (req, res) => {
  try {
    const buildingData = await Building.create(req.body);
    res.status(200).json(buildingData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update one building company
router.put('/:id', async (req, res) => {
  try {
    const buildingData = await Building.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (!buildingData) {
      res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
      return;
    } else {
      res.json(buildingData);
    }
  } catch (err) {
    res.status(500).json;
  }
});

// delete one building
router.delete('/:id', async (req, res) => {
  try {
    const buildingData = await Building.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!buildingData) {
      res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
