const express = require('express');
const app = express.Router();
const models = require('../models/index');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10)

app.post('/app/newuser', (req,res)=>{
    req.body.senha = bcrypt.hashSync(req.body.senha,salt); //encriptar senha
    models.Usuario.findOne({where:{nome:req.body.nome}}).then(usuarioExiste =>{
        if (usuarioExiste != null){
        var usuarioBanco = usuarioExiste.dataValues.nome; //captura usuario já cadastrado 
        }
        if (usuarioBanco == req.body.nome) { //verifica se o usuario já esta cadastrado
            res.status(500).send('Usuário Já Existe!')
        } else { 
         models.Usuario.create(req.body).then(usuario=>res.json(usuario));
      }
    });
  });

app.get('/app/user/:id', async(req,res) =>{
   await models.Usuario.findOne({where:{id:req.params.id}})
     .then(usuario =>{res.send(usuario)});
});

app.get('/app/user', async(req,res) =>{
    await models.Usuario.findAll()
      .then(usuario =>{res.send(usuario)});
 });

 app.put('/app/updateuser/:id', async(req,res)=>{
     req.body.senha = bcrypt.hashSync(req.body.senha,salt)
     await models.Usuario.update(req.body,{where: {id:req.params.id}})
      .then(()=>{res.send('O Usuário foi alterado com Sucesso!')});
 })

 app.delete('/app/deleteuser/:id', async(req,res)=>{
     await models.Usuario.destroy({where:{id: req.params.id}})
       .then(()=>{res.send('O Usuário foi Excluído com Sucesso!')})
 })

module.exports = app;