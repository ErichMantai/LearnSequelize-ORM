const express = require('express');
const app = express.Router();
const models = require('../models/index');

app.post('/app/clienteregister', async(req,res) => {
   await models.Cliente.create(req.body)
     .then(cliente => {
      return res.json(cliente);
   });    
});

app.get('/app/cliente', async (req,res) =>{
      await models.Cliente.findAll().then(cliente =>{
    return res.json(cliente);
  });
});

app.get('/app/cliente/:id',async(req,res)=>{
    await models.Cliente.findOne({where:{id:req.params.id}})
    .then(cliente=>{
           return res.json(cliente);
        }); 
    });

app.delete('/app/deletecliente/:id', async (req,res)=>{
    await models.Cliente.destroy({where:{id: req.params.id}}).then(cliente =>{
         return res.send('Cliente Excluido Com Sucesso!');
   });   
});

app.put('/app/updatecliente/:id',async (req,res)=>{
   await models.Cliente.update(req.body, {where: {id: req.params.id}})
     .then(cliente =>{
       return res.json(cliente);
   });   
})

module.exports = app;
