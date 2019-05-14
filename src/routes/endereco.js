const express = require('express');
const app = express.Router();
const models = require('../models/index');

app.post('/app/newendereco', async(req,res)=>{
    const { cliente, ...data} = req.body;
    const resposta = await models.ClienteEndereco.create(data)
    if (cliente && cliente.length > 0) {
       resposta.setCliente(cliente);
    }
    return res.json(resposta);
});

app.get('/app/clienteendereco',async(req,res)=>{
    await models.clienteEndereco.findAll().then(endereco=>{res.json(endereco)});
});

app.get('/app/clienteendereco/:id',async(req,res)=>{
    await models.clienteEndereco.findOne({where:{id: req.params.id},
    include: {model: models.Cliente, as: 'endereco'}})
    .then(endereco=>{res.json(endereco)});
});

app.put('/app/updateendereco/:id',async(req,res)=>{
    await models.clienteEndereco.update(req.body, {where: {id: req.params.id}})
    .then(endereco=>{res.send('Endereço Alterado Com Sucesso!')});
});

app.delete('/app/deleteendereco/:id', async(req,res)=>{
  await models.clienteEndereco.destroy({where:{id:req.params.id}})
  .then(endereco =>{res.send('Endereço Excluído com Sucesso!')})
});

module.exports = app;