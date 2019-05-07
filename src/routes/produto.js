const express = require('express');
const app = express.Router();
const models = require('../models/index');

app.post('/app/newproduto', async(req,res)=>{
    const { categoria, ...data} = req.body;
    const resposta = await models.Produto.create(data)
    if (categoria && categoria.length > 0) {
       resposta.setCategoria(categoria);
    }
    return res.json(resposta);
});

app.get('/app/produto',async(req,res)=>{
    await models.Produto.findAll().then(produto=>{res.json(produto)});
});

app.get('/app/produto/:id',async(req,res)=>{
    await models.Produto.findOne({where:{id: req.params.id},
    include: {model: models.Categoria, as: 'categoria'}})
    .then(produto=>{res.json(produto)});
});

app.put('/app/updateproduto/:id',async(req,res)=>{
    await models.Produto.update(req.body, {where: {id: req.params.id}})
    .then(produto=>{res.send('Produto Alterado Com Sucesso!')});
});

app.delete('/app/deleteproduto/:id', async(req,res)=>{
  await models.Produto.destroy({where:{id:req.params.id}})
  .then(produto =>{res.send('Produto Excluído com Sucesso!')})
});

module.exports = app;