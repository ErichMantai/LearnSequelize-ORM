'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('caixa', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dt_abertura: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      dt_fechamento: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: true,
      },
      hora_abertura: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      hora_fechamento: {
       type: Sequelize.STRING,
       allowNull: true,
      },
      dinheiro_abertura: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      dinheiro_fechamento: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      caixa_total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('caixa');
  }
};