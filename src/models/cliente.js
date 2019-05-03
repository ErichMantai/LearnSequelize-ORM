  module.exports = function (sequelize,DataTypes) {
    const  clienteModel = sequelize.define('Cliente', {
      nome: DataTypes.STRING,
      dt_aniversario: DataTypes.DATE,
      telefone: DataTypes.STRING, 
   }, {
     freezeTableName :true
   });
    //  clienteModel.associate = function(models){
    //  clienteModel.hasMany(models.ClienteEndereco);
    //  clienteModel.hasMany(models.Pedido);
  //  }
  return clienteModel; 
  };

