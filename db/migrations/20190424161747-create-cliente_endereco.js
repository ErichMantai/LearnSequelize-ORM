module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('cliente_endereco', {
     id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: DataTypes.INTEGER,
     },
     cliente_id: {
       allowNull: false,
       type: DataTypes.INTEGER,
       references: {model:'cliente', key: 'id'},
       onUpdate: 'cascade',              
       onDelete: 'cascade',
     },
     cep: {
       allowNull: true,
       type: DataTypes.STRING,
     },
     cidade: {
       allowNull: false,
       type:DataTypes.STRING,
     },
     logradouro: {
       allowNull: false,
       type: DataTypes.STRING,
     },
     bairro: {
       allowNull: false,
       type: DataTypes.STRING,
     },
     numero: {
       allowNull: false,
       type: DataTypes.INTEGER,
     },
     complemento: {
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
    return queryInterface.dropTable('cliente_endereco');
  }
};
