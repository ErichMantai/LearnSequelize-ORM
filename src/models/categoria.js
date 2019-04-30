module.exports = (sequelize, DataTypes) => {
    const  Categoria = sequelize.define('Categoria', {
       nome: DataTypes.STRING,
       categoria: DataTypes.STRING,
    }, {
      freezeTableName :true
    });
    // Categoria.associate = function(models) {
      // this.hasMany(models.Produto);
    // }
  return Categoria;   
  }