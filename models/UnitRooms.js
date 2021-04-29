/**
 * /models/UnitRooms.js
 *
 * @description: Database Models: unit_rooms
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitRooms extends Model {}

UnitRooms.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    total_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    legal_beds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    full_bath: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    half_bath: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    furnished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
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
    modelName: 'unit_rooms',
  }
);

module.exports = UnitRooms;
