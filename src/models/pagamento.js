'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pagamento = sequelize.define('pagamento', {
    pedido_id: {
      type: DataTypes.INTEGER,
      references: {model:'pedido', key: 'id'},
    }, 
    pagamento_tipo: DataTypes.STRING,
    valor: DataTypes.DOUBLE
  }, {freezeTableName :true});
  Pagamento.associate = function(models) {
    Pagamento.belongsTo(models.Pedido);
  };
  return Pagamento;
};