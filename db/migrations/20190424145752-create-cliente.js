module.exports = {
  up: (queryInterface, DataTypes) => {
     return queryInterface.createTable('cliente', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nome: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dt_aniversario: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
      telefone: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    })  
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('cliente');
  }
};
