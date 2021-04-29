/**
 * /routes/api/unit.js
 *
 * @description: the `/api/unit` endpoint
 *
 */

const router = require('express').Router();
const { Unit, UnitLease, UnitRooms, UnitDesc } = require('../../models');

// get all units
router.get('/', async (req, res) => {
  try {
    const unitData = await Unit.findAll({
      include: [
        { model: UnitLease, as: 'unit_lease' },
        { model: UnitRooms, as: 'unit_rooms' },
        { model: UnitDesc, as: 'unit_desc' },
      ],
    });
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// // get one building
// router.get('/:id', async (req, res) => {
//   try {
//     const buildingData = await Building.findByPk(req.params.id, {
//       include: [
//         { model: Management, as: 'management' },
//         { model: BuildingAmenities, as: 'building_amenities' },
//       ],
//     });

//     if (!buildingData) {
//       res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
//       return;
//     }

//     res.status(200).json(buildingData);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

// // create a building
// router.post('/', async (req, res) => {
//   try {
//     const buildingData = await Building.create(req.body);
//     res.status(200).json(buildingData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

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
