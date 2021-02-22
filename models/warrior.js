'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class warrior extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  warrior.init({
    player_name: DataTypes.TEXT,
    previous_team: DataTypes.STRING,
    salary: DataTypes.INTEGER,
    height: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'warrior',
  });
  return warrior;
};