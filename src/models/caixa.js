'use strict';
module.exports = (sequelize, DataTypes) => {
  const Caixa = sequelize.define('caixa', {
    dt_abertura:        DataTypes.DATEONLY,
    dt_fechamento:      DataTypes.DATEONLY,
    hora_abertura:      DataTypes.TIMESTAMP,
    hora_fechamento:    DataTypes.TIMESTAMP,
    dinheiro_abertura:  DataTypes.DOUBLE,
    dinheiro_fechamento:DataTypes.DOUBLE,
    caixa_total:        DataTypes.DOULE,
  }, {freezeTableName :true});
  Caixa.associate = function(models) {
    Caixa.hasMany(models.Pedido);
  };
  return Caixa;
};