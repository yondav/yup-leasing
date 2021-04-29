/**
 * /models/UnitLease.js
 *
 * @description: Database Models: unit_lease
 *
 */

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

class UnitLease extends Model {}

UnitLease.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    move_in: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    // net_rent: {
    //   type: DataTypes.INTEGER,
    //   get() {
    //     return ((this.lease_term - this.months_free) * this.gross_rent) / this.lease_term;
    //   },
    // },
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
    modelName: 'unit_lease',
  }
);

module.exports = UnitLease;
