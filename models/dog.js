'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dog.init({
    name: DataTypes.TEXT,
    breed: DataTypes.TEXT,
    loud: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'dog',
  });
  return dog;
};