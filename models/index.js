/**
 * /models/index.js
 *
 * @description: Model Associations
 *
 */

// Models
const Management = require('./Management');
const Building = require('./Building');
const BuildingAmenities = require('./BuildingAmenities');
const Unit = require('./Unit');
const UnitLease = require('./UnitLease');
const UnitRooms = require('./UnitRooms');
const UnitDesc = require('./UnitDesc');
const UnitAmenities = require('./UnitAmenities');
const UnitAmenitiesOutdoor = require('./UnitAmenitiesOutdoor');

// Management.hasMany(Building, {
//   foreignKey: 'management_id',
// });

// Building.belongsTo(Management, {
//   foreignKey: 'management_id',
// });

// BuildingAmenities.belongsTo(Building, {
//   foreignKey: 'building_id',
// });

// Building.hasOne(BuildingAmenities, {
//   foreignKey: 'building_id',
//   as: 'building_amenities',
// });

// Building.hasMany(Unit, {
//   foreignKey: 'building_id',
// });

// Unit.belongsTo(Building, {
//   foreignKey: 'building_id',
// });

// UnitAmenities.belongsTo(Unit, {
//   foreignKey: 'unit_id',
// });

// Unit.hasOne(UnitAmenities, {
//   foreignKey: 'unit_id',
//   as: 'unit_amenities',
// });

// UnitAmenities.belongsTo(Unit, {
//   foreignKey: 'unit_id',
//   as: 'unit_amenities',
// });

// Unit.hasOne(UnitAmenities, {
//   foreignKey: 'unit_id',
//   as: 'unit_amenities',
// });

UnitAmenitiesOutdoor.belongsToMany(Unit, {
  through: {
    model: UnitAmenities,
  },
});

UnitLease.belongsTo(Unit, {
  foreignKey: 'unit_id',
  as: 'unit_lease',
});

UnitRooms.belongsTo(Unit, {
  foreignKey: 'unit_id',
  as: 'unit_rooms',
});

UnitDesc.belongsTo(Unit, {
  foreignKey: 'unit_id',
  as: 'unit_desc',
});

Unit.hasOne(UnitLease, {
  foreignKey: 'unit_id',
  as: 'unit_lease',
});

Unit.hasOne(UnitRooms, {
  foreignKey: 'unit_id',
  as: 'unit_rooms',
});

Unit.hasOne(UnitDesc, {
  foreignKey: 'unit_id',
  as: 'unit_desc',
});

Unit.belongsTo(Building, {
  foreignKey: 'building_id',
});

Building.hasMany(Unit, {
  foreignKey: 'building_id',
});

Building.hasOne(BuildingAmenities, {
  foreignKey: 'building_id',
  as: 'building_amenities',
});

BuildingAmenities.belongsTo(Building, {
  foreignKey: 'building_id',
  as: 'building_amenities',
});

Management.hasMany(Building, {
  foreignKey: 'management_id',
});

Building.belongsTo(Management, {
  foreignKey: 'management_id',
});

module.exports = {
  Management,
  Building,
  BuildingAmenities,
  Unit,
  UnitLease,
  UnitRooms,
  UnitDesc,
  UnitAmenities,
  UnitAmenitiesOutdoor,
};
