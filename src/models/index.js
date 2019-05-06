const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../../config/database.js');

const db = {
  Cliente: require('./cliente'),
  Usuario: require('./usuario'),
  Categoria: require('./categoria'),
  Produto: require('./produto'),
};
const sequelize = new Sequelize(config);

fs
  .readdirSync(__dirname)
  .filter(file => (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Produto.belongsTo(db.Categoria, {as:'categoria'});
// db.Categoria.hasOne(db.Produto);
// db.cliente = require('../models/cliente')(sequelize, Sequelize);
// db.usuario = require('../models/usuario')(sequelize, Sequelize);
// db.categoria = require('../models/categoria')(sequelize, Sequelize);
// db.produto = require('../models/produto')(sequelize, Sequelize);

module.exports = db;