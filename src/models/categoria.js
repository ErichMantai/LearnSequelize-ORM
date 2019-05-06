module.exports = (sequelize, DataTypes) => {
    const  Categoria = sequelize.define('Categoria', {
       categoria: DataTypes.STRING,
    }, {
      freezeTableName :true,
      // underscored: true
    });
    // Categoria.associate = function(models) {
      // Categoria.hasOne(models.Produto);
    // }
  return Categoria;   
  }
  