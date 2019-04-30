const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const { Cliente }     = require('./models');

const port    = 3000;
const app     = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get('/app', (req,res) => {
  res.send('NoverFood em Construção!');
});

app.post('/app/clienteregister', (req,res) => {
   Cliente.create(req.body)
     .then(cliente => {
      return res.json(cliente);
   });    
});

app.get('/app/getallcliente', (req,res) =>{
      Cliente.findAll().then(cliente =>{
    return res.json(cliente);
  });
});

app.listen(port, () => {
   console.log(`WebService Rodando na porta ${port}!`);
});

module.exports = app;