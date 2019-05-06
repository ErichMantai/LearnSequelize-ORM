module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
       nome: DataTypes.STRING,
       categoria_id: {
        type: DataTypes.INTEGER,
        references: {model: 'categoria', key: 'id'}    
       }, 
       vl_unitario: DataTypes.DECIMAL(10,2),
       ativo: DataTypes.BOOLEAN,
       codigo: DataTypes.STRING 
    }, 
    {
      freezeTableName :true,
      // underscored: true
    });
    // Produto.associate = function(models){
        // Produto.hasOne(models.Categoria);
        // models.Categoria.hasOne(Produto);
        // Produto.hasMany(models.Itensextras);
        // Produto.hasMany(models.Itenspedido);
    // }
    return Produto;  
  }
  
  