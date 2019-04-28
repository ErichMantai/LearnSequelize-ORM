'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itensextra', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'produto', key:'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      itenspedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'itenspedido', key:'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      valor: {
        type: Sequelize.DOUBLE
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
    return queryInterface.dropTable('itensextra');
  }
};
