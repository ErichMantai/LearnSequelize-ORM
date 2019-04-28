module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('categoria', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      categoria: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    })
  },

  down: (queryInterface, Sequelize) => {
   return queryInterface.dropTable('categoria');
  }
};
