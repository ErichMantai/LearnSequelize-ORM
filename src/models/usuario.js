module.exports = (sequelize, DataTypes) => {
    const  Usuario = sequelize.define('Usuario', {
       nome: DataTypes.STRING,
       senha: DataTypes.STRING,
       tipo: DataTypes.STRING, 
    }, {
      freezeTableName :true
    });
    // Usuario.associate = function(models){
      // Usuario.hasMany(models.Pedido);
    // }
  return Usuario;  
  
  }
  
  