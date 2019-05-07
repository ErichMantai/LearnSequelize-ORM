module.exports = (sequelize, DataTypes) => {
    const  Categoria = sequelize.define('Categoria', {
       categoria: DataTypes.STRING,
    }, {
      freezeTableName :true,
    });
  return Categoria;   
  }
  