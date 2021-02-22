'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fragrance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.fragrance.belondsTo(models.parfume_description)
    }
  };
  fragrance.init({
    brand: DataTypes.TEXT,
    parfume_name: DataTypes.TEXT,
    size: DataTypes.TEXT,
    price: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'fragrance',
  });
  return fragrance;
};