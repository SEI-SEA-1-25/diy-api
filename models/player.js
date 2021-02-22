'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.player.belongsTo(models.club)
    }
  };
  player.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    nationality: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'player',
  });
  return player;
};

