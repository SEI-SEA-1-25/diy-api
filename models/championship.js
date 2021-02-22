'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class championship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  championship.init({
    warriorId: DataTypes.INTEGER,
    year_won: DataTypes.INTEGER,
    most_mvp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'championship',
  });
  return championship;
};