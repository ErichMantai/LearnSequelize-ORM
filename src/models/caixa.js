'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caixa = sequelize.define('caixa', {
    dt_abertura:        DataTypes.DATEONLY,
    dt_fechamento:      DataTypes.DATEONLY,
    hora_abertura:      DataTypes.STRING,
    hora_fechamento:    DataTypes.STRING,
    dinheiro_abertura:  DataTypes.DOUBLE,
    dinheiro_fechamento:DataTypes.DOUBLE,
    caixa_total:        DataTypes.DOUBLE,
  }, {freezeTableName :true});
  // Caixa.associate = function(models) {
    // Caixa.hasMany(models.Pedido);
    // Pedido.hasOne(models.Caixa);
  // };
  return Caixa;
};