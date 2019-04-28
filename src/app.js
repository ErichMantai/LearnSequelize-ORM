const express     = require('express');
const bodyParser  = require('body-parser');

const port    = 3000;
const app     = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// require('./models/cliente');
require('./routes/index');
// require('./controllers/clienteController');

app.get('/app', (req,res) => {
  res.send('NoverFood em Construção!');
}); 

app.listen(port, () => {
   console.log(`WebService Rodando na porta ${port}!`);
});