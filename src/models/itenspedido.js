'use strict';
module.exports = (sequelize, DataTypes) => {
  const Itenspedido = sequelize.define('itenspedido', {
    pedido_id:{
      type:  DataTypes.INTEGER,
      references: {model:'pedido', key:'id'},
    },
    produto_id:{
      type: DataTypes.INTEGER,
      references: {model: 'produto', key:'id'}
    }, 
    observacao: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    vl_unitario: DataTypes.DOUBLE,
    vl_total: DataTypes.DOUBLE
  }, {freezeTableName :true});
  Itenspedido.associate = function(models) {
    Itenspedido.hasOne(models.Pedido);
    Itenspedido.hasMany(models.Produto);
    Itenspedido.hasMany(models.Itensextras);
  };
  return Itenspedido;
};