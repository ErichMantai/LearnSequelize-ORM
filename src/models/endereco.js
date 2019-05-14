module.exports = (sequelize, DataTypes) => {
    const  clienteEndereco = sequelize.define('Cliente-Endereco', {
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
    clienteEndereco.associate = function(models) {
      clienteEndereco.belongsTo(models.Cliente, {as:'endereco'});
      }; 
  return clienteEndereco;  
  
  }
  
  