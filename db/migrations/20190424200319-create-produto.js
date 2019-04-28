module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('produto', {
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
      categoria_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {model:'categoria', key: 'id'},
        onUpdate: 'cascade',              
        onDelete: 'cascade',
      },
      vl_unitario: {
        allowNull:false,
        type: DataTypes.DECIMAL(10,2),
      },
      ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,                     
      },
     codigo: {
       allowNull: true,
       type: DataTypes.STRING,
     }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('produto');
  }
};
