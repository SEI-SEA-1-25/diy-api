'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pooch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  pooch.init({
    breed: DataTypes.TEXT,
    breedOriginId: DataTypes.INTEGER,
    breedTraitId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'pooch',
  });
  return pooch;
};