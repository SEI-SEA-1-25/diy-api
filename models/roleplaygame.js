'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roleplaygame extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  roleplaygame.init({
    name: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    founded: DataTypes.INTEGER,
    continentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'roleplaygame',
  });
  return roleplaygame;
};