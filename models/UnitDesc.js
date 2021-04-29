/**
 * /models/UnitDesc.js
 *
 * @description: Database Models: unit_desc
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitDesc extends Model {}

UnitDesc.init(
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
    modelName: 'unit_desc',
  }
);

module.exports = UnitDesc;
