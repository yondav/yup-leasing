/**
 * /models/UnitAmen.js
 *
 * @description: Database Models: Unit Amenities
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitAmenities extends Model {}

UnitAmenities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    outdoor: {
      type: DataTypes.JSON,
    },
    features: {
      type: DataTypes.JSON,
    },
    view: {
      type: DataTypes.JSON,
    },
    unit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit_amenities',
  }
);

module.exports = UnitAmenities;
