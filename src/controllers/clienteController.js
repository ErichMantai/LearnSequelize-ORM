const Cliente = require('../models/cliente');
module.exports = {
    async postCliente(req,res) {
        const cliente = await Cliente.create(req.body);
        res.json(cliente);

    }
}