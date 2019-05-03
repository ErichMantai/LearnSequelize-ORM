const express = require('express');
const app = express.Router();
const models = require('../models/index');

app.post('/app/clienteregister', async(req,res) => {
   await models.cliente.create(req.body)
     .then(cliente => {
      return res.json(cliente);
   });    
});

app.get('/app/getallcliente', async (req,res) =>{
      await models.cliente.findAll().then(cliente =>{
    return res.json(cliente);
  });
});

app.get('/app/getcliente/:id',async(req,res)=>{
    await models.cliente.findOne({where:{id:req.params.id}})
    .then(cliente=>{
           return res.json(cliente);
        }); 
    });

app.delete('/app/deletecliente/:id', async (req,res)=>{
    await models.cliente.destroy({where:{id: req.params.id}}).then(cliente =>{
         return res.send('Cliente Excluido Com Sucesso!');
   });   
});

app.put('/app/updatecliente/:id',async (req,res)=>{
   await models.cliente.update(req.body, {where: {id: req.params.id}})
     .then(cliente =>{
       return res.json(cliente);
   });   
})

module.exports = app;
