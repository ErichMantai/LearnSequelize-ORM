const express = require('express');
const app = express.Router();
const models = require('../models/index');

app.post('/app/newcategoria', async(req,res)=>{
    await models.Categoria.create(req.body)
    .then(categoria =>{res.json(categoria)});
});

app.get('/app/categoria',async(req,res)=>{
    await models.Categoria.findAll().then(categoria=>{res.json(categoria)});
});

app.get('/app/categoria/:id',async(req,res)=>{
    await models.Categoria.findOne({where:{id: req.params.id}})
    .then(categoria=>{res.json(categoria)});
});

app.put('/app/updatecategoria/:id',async(req,res)=>{
    await models.Categoria.update(req.body, {where: {id: req.params.id}})
    .then(categoria=>{res.json(categoria)});
});

app.delete('/app/deletecategoria/:id', async(req,res)=>{
  await models.Categoria.destroy({where:{id:req.params.id}})
  .then(categoria =>{res.send('Categoria Excluída com Sucesso!')})
});

module.exports = app;