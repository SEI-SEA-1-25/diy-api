'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class parfume_description extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.parfume_description.hasMany(models.fragrance)
    }
  };
  parfume_description.init({
    type: DataTypes.TEXT,
    for: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'parfume_description',
  });
  return parfume_description;
};