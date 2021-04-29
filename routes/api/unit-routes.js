/**
 * /routes/api/unit.js
 *
 * @description: the `/api/unit` endpoint
 *
 */

const router = require('express').Router();
const {
  Unit,
  UnitLease,
  UnitRooms,
  UnitDesc,
  UnitAmenities,
  UnitAmenitiesOutdoor,
  UnitAmenitiesFeatures,
  UnitAmenitiesView,
} = require('../../models');

// get all units
router.get('/', async (req, res) => {
  try {
    const unitData = await Unit.findAll({
      include: [
        { model: UnitLease, as: 'unit_lease' },
        { model: UnitRooms, as: 'unit_rooms' },
        { model: UnitDesc, as: 'unit_desc' },
        {
          model: UnitAmenities,
          as: 'unit_amenities',
          include: [
            { model: UnitAmenitiesOutdoor, as: 'unit_amenities_outdoor' },
            { model: UnitAmenitiesFeatures, as: 'unit_amenities_feautures' },
            { model: UnitAmenitiesView, as: 'unit_amenities_view' },
          ],
        },
      ],
    });
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// get one unit
router.get('/:id', async (req, res) => {
  try {
    const unitData = await Unit.findAll({
      include: [
        { model: UnitLease, as: 'unit_lease' },
        { model: UnitRooms, as: 'unit_rooms' },
        { model: UnitDesc, as: 'unit_desc' },
        {
          model: UnitAmenities,
          as: 'unit_amenities',
          include: [
            { model: UnitAmenitiesOutdoor, as: 'unit_amenities_outdoor' },
            { model: UnitAmenitiesFeatures, as: 'unit_amenities_feautures' },
            { model: UnitAmenitiesView, as: 'unit_amenities_view' },
          ],
        },
      ],
    });

    if (!unitData) {
      res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// // create a unit
router.post('/', async (req, res) => {
  try {
    const unitData = await Unit.create(req.body, {
      include: [
        { association: UnitLease },
        { association: UnitRooms },
        { association: UnitDesc },
        {
          association: UnitAmenities,
          include: [
            { association: UnitAmenitiesOutdoor },
            { association: UnitAmenitiesFeatures },
            { association: UnitAmenitiesView },
          ],
        },
      ],
    });
    res.status(200).json(unitData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

// // update one building
// router.put('/:id', async (req, res) => {
//   try {
//     const buildingData = await Building.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!buildingData) {
//       res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
//       return;
//     } else {
//       res.json(buildingData);
//     }
//   } catch (err) {
//     res.status(500).json;
//   }
// });

// // delete one building
// router.delete('/:id', async (req, res) => {
//   try {
//     const buildingData = await Building.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!buildingData) {
//       res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
//       return;
//     }

//     res.status(200).json(buildingData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
