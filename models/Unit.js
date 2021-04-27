/**
 * /models/Unit.js
 *
 * @description: Database Models: Unit
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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_num: {
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
    move_in: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    market_as: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lease_term: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gross_rent: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    concession: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    months_free: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // come back to this one *******
    net_rent: {
      type: DataTypes.VIRTUAL,
      get() {
        return (
          ((this.getDataValue(lease_term) - this.getDataValue(months_free)) * this.getDataValue(gross_rent)) /
          this.getDataValue(lease_term)
        );
      },
    },
    furnished: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
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
    total_rooms: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    size: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: true,
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
