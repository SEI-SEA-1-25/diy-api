'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class neopet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  neopet.init({
    hails_from: DataTypes.STRING,
    species: DataTypes.STRING,
    name: DataTypes.STRING,
    land_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'neopet',
  });
  return neopet;
};