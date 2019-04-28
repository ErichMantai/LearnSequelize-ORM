'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('pedido', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      data_emissao: {
        type: Sequelize.DATEONLY,
        defaultValue: Sequelize.NOW,
        allowNull: false,
      },
      hora: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {model:'cliente', key: 'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      finalizado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      desconto: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      valor_liquido: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'usuario', key: 'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      caixa_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model:'caixa', key: 'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      taxa_entrega:{
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('pedido');
  }
};