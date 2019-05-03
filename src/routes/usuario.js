const express = require('express');
const app = express.Router();
const models = require('../models/index');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10)

app.post('/app/newuser', (req,res)=>{
    req.body.senha = bcrypt.hashSync(req.body.senha,salt); //encriptar senha
    models.usuario.findOne({where:{nome:req.body.nome}}).then(usuarioExiste =>{
        if (usuarioExiste != null){
        var usuarioBanco = usuarioExiste.dataValues.nome; //captura usuario já cadastrado 
        }
        if (usuarioBanco == req.body.nome) { //verifica se o usuario já esta cadastrado
            res.status(500).send('Usuário Já Existe!')
        } else { 
         models.usuario.create(req.body).then(usuario=>{return res.json(usuario);});
      }
    });
  });

app.get('/app/getuser/:id', async(req,res) =>{
   await models.usuario.findOne({where:{id:req.params.id}})
     .then(usuario =>{res.send(usuario)});
});

app.get('/app/getalluser', async(req,res) =>{
    await models.usuario.findAll()
      .then(usuario =>{res.send(usuario)});
 });

 app.put('/app/updateuser/:id', async(req,res)=>{
     req.body.senha = bcrypt.hashSync(req.body.senha,salt)
     await models.usuario.update(req.body,{where: {id:req.params.id}})
      .then(()=>{res.send('O Usuário foi alterado com Sucesso!')});
 })

 app.delete('/app/deleteuser/:id', async(req,res)=>{
     await models.usuario.destroy({where:{id: req.params.id}})
       .then(()=>{res.send('O Usuário foi Excluído com Sucesso!')})
 })

module.exports = app;