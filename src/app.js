const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');

const port    = 3000;
const app     = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(require('./routes/cliente'));
app.use(require('./routes/usuario'));

app.get('/app', (req,res) => {
   res.send('NoverFood em Construção!');
 })
app.listen(port, () => {
   console.log(`WebService Rodando na porta ${port}!`);
});