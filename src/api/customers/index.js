const uuid = require('uuid/v1');
const { Router } = require('express');
const routes = new Router();

const customersModels = require('../../models/customers')

// GET = BUSCAR
routes.get("/", function (req, res) {
    customersModels.find().then(resposta => {
        res.json(resposta)
    })
});


// POST = INSERIR
routes.post("/", function (req, res) {

    customersModels.create({
        name: req.body.name,
        cep: req.body.cep,
        neighborhood: req.body.neighborhood,
        street: req.body.street,
        number: req.body.number,
        city: req.body.city,
        state: req.body.state
    })

    res.json({ msg: 'Cliente Criado!' });
});


// PUT = ATUALIZAR
routes.put("/:id", function (req, res) {
    id = req.params.id
    customersModels.update({ _id: id }, {
        name: req.body.name,
        street: req.body.street
    }).then(() => { res.json({ msg: "wow" }) })
});

// DELETE = DELETAR
routes.delete("/:id", function (req, res) {
    const id = req.params.id;
    customersModels.findOneAndRemove({ _id: id }).then(() => res.json({ msg: "Cliente excluido" }));
});



module.exports = routes;


