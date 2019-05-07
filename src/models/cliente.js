  'use strict';
  module.exports = function (sequelize,DataTypes) {
    const  Cliente = sequelize.define('Cliente', {
      nome: DataTypes.STRING,
      dt_aniversario: DataTypes.DATE,
      telefone: DataTypes.STRING, 
   }, {
     freezeTableName :true
   }); 
//    Cliente.associate = function(models) {
//     models.Cliente.hasMany(models.Endereco);
// }; 
  return Cliente; 
};

