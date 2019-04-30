'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itensextra = sequelize.define('itensextra', {
    itenspedido_id: {
      type: DataTypes.INTEGER,
      references: {model:'itenspedido', key:'id'},
    },
    produto_id: {
      type: DataTypes.INTEGER,
      references: {model:'produto', key:'id'},
    }, 
    valor: DataTypes.DOUBLE
  }, {freezeTableName:true});
  // Itensextra.associate = function(models) {
    // Itensextra.hasMany(models.Produto);
    // Itensextra.belongsTo(models.Itenspedido);
  // };
  return Itensextra;
};