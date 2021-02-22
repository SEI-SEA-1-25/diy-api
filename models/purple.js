'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class purple extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.purple.belongsTo(models.color)
    }
  };
  purple.init({
    name: DataTypes.STRING,
    hex: DataTypes.STRING,
    rgb: DataTypes.STRING,
    hsl: DataTypes.STRING,
    description: DataTypes.STRING,
    colorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'purple',
  });
  return purple;
};