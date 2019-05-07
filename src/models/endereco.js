module.exports = (sequelize, DataTypes) => {
    const  Endereco = sequelize.define('Cliente-Endereco', {
       cliente_id: {
         field: 'cliente_id',
         type: DataTypes.INTEGER,
         references: {model: 'cliente', key: 'id'},
         defaultValue: true,   
       }, 
       cep: DataTypes.STRING,
       cidade: DataTypes.STRING,
       logradouro: DataTypes.STRING,
       bairro: DataTypes.STRING,
       numero: DataTypes.INTEGER,
       complemento: DataTypes.STRING,  
    }, {
      freezeTableName :true
    });
    //  Endereco.associate = function(models) {
      //  models.Cliente.belongsTo(models.Endereco,{as:'endereco'}, {foreignKey: {allowNull: false}});
      // }; 
  return Endereco;  
  
  }
  
  