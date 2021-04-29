/**
 * /models/UnitAmenitiesOutdoor.js
 *
 * @description: Database Models: unit_amenities_outdoor
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitAmenitiesOutdoor extends Model {}

UnitAmenitiesOutdoor.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    balcony: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    garden: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    private_roof: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    roof_rights: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    terrace: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit_amenities_outdoor',
  }
);

module.exports = UnitAmenitiesOutdoor;
