'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('itenspedido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'pedido',key:'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      produto_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'produto',key:'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      vl_unitario: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      vl_total: {
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
    return queryInterface.dropTable('itenspedido');
  }
};