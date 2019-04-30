'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('pedido', {
    tipo: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    data_emissao: DataTypes.DATEONLY,
    hora: DataTypes.STRING,
    cliente_id: {
       type: DataTypes.INTEGER,
       references: {model: 'cliente', key: 'id'}, 
    },
    finalizado: DataTypes.BOOLEAN,
    desconto: DataTypes.DOUBLE,
    observacao: DataTypes.STRING,
    valor_liquido: DataTypes.DOUBLE,
    usuario_id: {
      type: DataTypes.INTEGER,
      references: {model: 'usuario', key: 'id'} 
    },
    caixa_id: {
     type: DataTypes.INTEGER,
     references: {model: 'caixa', key: 'id'} 
    }
  }, {freezeTableName :true});
  // Pedido.associate = function(models) {
    // Pedido.hasOne(models.Cliente);
    // Pedido.hasOne(models.Usuario);
    // Pedido.hasOne(models.Caixa);
    // Pedido.hasMany(models.Pagamento);
  // };
  return Pedido;
};