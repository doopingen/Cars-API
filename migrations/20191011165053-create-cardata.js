'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cardata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      make: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      mpg: {
        type: Sequelize.INTEGER
      },
      cyl: {
        type: Sequelize.INTEGER
      },
      disp: {
        type: Sequelize.INTEGER
      },
      hp: {
        type: Sequelize.INTEGER
      },
      drat: {
        type: Sequelize.FLOAT
      },
      wt: {
        type: Sequelize.FLOAT
      },
      qsec: {
        type: Sequelize.FLOAT
      },
      vs: {
        type: Sequelize.INTEGER
      },
      am: {
        type: Sequelize.INTEGER
      },
      gear: {
        type: Sequelize.INTEGER
      },
      carb: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cardata');
  }
};