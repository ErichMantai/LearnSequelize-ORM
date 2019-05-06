module.exports = (sequelize, DataTypes) => {
    const  Usuario = sequelize.define('Usuario', {
       nome: DataTypes.STRING,
       senha: DataTypes.STRING,
       isAdmin: DataTypes.BOOLEAN, 
    }, {
      freezeTableName :true
    });
    // Usuario.associate = function(models){
      // Usuario.hasMany(models.Pedido);
    // }
  return Usuario;  
  
  }
  
  