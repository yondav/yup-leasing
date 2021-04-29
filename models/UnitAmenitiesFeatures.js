/**
 * /models/UnitAmenitiesFeatures.js
 *
 * @description: Database Models: unit_amenities_features
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitAmenitiesFeatures extends Model {}

UnitAmenitiesFeatures.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    central_air: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    dishwasher: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    fireplace: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    hardwood_floors: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    washer_dryer: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    unit_amenities_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'unit_amenities',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit_amenities_features',
  }
);

module.exports = UnitAmenitiesFeatures;
