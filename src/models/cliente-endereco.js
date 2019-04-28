module.exports = (sequelize, DataTypes) => {
    const  ClienteEndereco = sequelize.define('Cliente-Endereco', {
       cliente_id: {
         type: DataTypes.INTEGER,
         references: {model: 'cliente', key: 'id'}   
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
    ClienteEndereco.associate = function (models) {
      ClienteEndereco.belongsTo(models.Cliente);
    };
  return ClienteEndereco;  
  
  }
  
  