module.exports = (sequelize, DataTypes) => {
    const Produto = sequelize.define('Produto', {
       nome: DataTypes.STRING,
       categoriaId: {
        field: 'categoria_Id',
        type: DataTypes.INTEGER,
        references: {model: 'categoria', key: 'id'},
        defaultValue: true
       }, 
       vl_unitario: DataTypes.DECIMAL(10,2),
       ativo: DataTypes.BOOLEAN,
       codigo: DataTypes.STRING 
    }, 
    {
      freezeTableName :true,
    });
    return Produto;  
  }
  
  