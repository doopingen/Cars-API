'use strict';
module.exports = (sequelize, DataTypes) => {
  const cardata = sequelize.define('cardata', {
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    mpg: DataTypes.INTEGER,
    cyl: DataTypes.INTEGER,
    disp: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    drat: DataTypes.FLOAT,
    wt: DataTypes.FLOAT,
    qsec: DataTypes.FLOAT,
    vs: DataTypes.INTEGER,
    am: DataTypes.INTEGER,
    gear: DataTypes.INTEGER,
    carb: DataTypes.INTEGER
  }, {});
  cardata.associate = function(models) {
    // associations can be defined here
  };
  return cardata;
};