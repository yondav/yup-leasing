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
