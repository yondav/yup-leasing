/**
 * /models/UnitAmenitiesView.js
 *
 * @description: Database Models: unit_amenities_view
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitAmenitiesView extends Model {}

UnitAmenitiesView.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    city_view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    garden_view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    park_view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    skyline_view: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    water_view: {
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
    modelName: 'unit_amenities_view',
  }
);

module.exports = UnitAmenitiesView;
