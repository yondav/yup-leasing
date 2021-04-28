/**
 * /routes/api/building-routes.js
 *
 * @description: the `/api/building` endpoint
 *
 */

const router = require('express').Router();
const { Building, Management, Unit } = require('../../models');

// get all management companies
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

// get one management company
router.get('/:id', async (req, res) => {
  try {
    const buildingData = await Building.findByPk(req.params.id, {
      include: [{ model: Management, as: 'management' }],
    });

    if (!buildingData) {
      res.status(404).json({ message: `No building found with id: ${req.params.id}!` });
      return;
    }

    res.status(200).json(buildingData);
    console.log(buildingData);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// // create a management company
// router.post('/', async (req, res) => {
//   try {
//     const managementData = await Management.create(req.body);
//     res.status(200).json(managementData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// // update one management company
// router.put('/:id', async (req, res) => {
//   try {
//     const managementData = await Management.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!managementData) {
//       res.status(404).json({ message: `No management company found with id: ${req.params.id}!` });
//       return;
//     } else {
//       res.json(managementData);
//     }
//   } catch (err) {
//     res.status(500).json;
//   }
// });

// // delete one category
// router.delete('/:id', async (req, res) => {
//   try {
//     const managementData = await Management.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     if (!managementData) {
//       res.status(404).json({ message: `No management company found with id: ${req.params.id}!` });
//       return;
//     }

//     res.status(200).json(managementData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
