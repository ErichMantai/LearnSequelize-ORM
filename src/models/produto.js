module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
       nome: DataTypes.STRING,
       categoria: {
        type: DataTypes.DATE,
        references: {model: 'categoria', key: 'id'}    
       }, 
       vl_unitario: DataTypes.DECIMAL(10,2),
       ativo: DataTypes.BOOLEAN,
       codigo: DataTypes.STRING 
    }, 
    {
      freezeTableName :true
    });
    // Produto.associate = function(models){
        // Produto.hasOne(models.Categoria);
        // Produto.belongsTo(models.Itensextras);
        // Produto.belongsTo(models.Itenspedido);
    // }
    return Produto;  
  }
  
  