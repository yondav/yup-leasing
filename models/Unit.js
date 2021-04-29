/**
 * /models/UnitLease.js
 *
 * @description: Database Models: unit_lease
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class Unit extends Model {}

Unit.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    unit_num: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    market_as: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    op: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    building_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'building',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'unit',
  }
);

module.exports = Unit;
