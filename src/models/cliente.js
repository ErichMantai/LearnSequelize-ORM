module.exports = (sequelize, DataTypes) => {
  const  Cliente = sequelize.define('Cliente', {
     nome: DataTypes.STRING,
     dt_aniversario: DataTypes.DATE,
     telefone: DataTypes.STRING, 
  }, {
    freezeTableName :true
  });
  Cliente.associate = function(models){
    Cliente.hasMany(models.ClienteEndereco);
    Cliente.hasMany(models.Pedido);
  }
  return Cliente;  
}

