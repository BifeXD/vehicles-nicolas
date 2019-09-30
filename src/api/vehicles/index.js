const uuid = require('uuid/v1');
const { Router } = require('express');
const routes = new Router();

const vehiclesModels = require('../../models/vehicles')

// GET = BUSCAR
routes.get("/", function (req, res) {
    vehiclesModels.find().then(resposta => {
        res.json(resposta)
    })
});


// POST = INSERIR
routes.post("/", function (req, res) {

    vehiclesModels.create({
        modelo: req.body.modelo, ano: req.body.ano,
    })

    res.json({ msg: 'Veiculo Criado!' });
});


// PUT = ATUALIZAR
routes.put("/:id", function (req, res) {
    id = req.params.id
    vehiclesModels.update({ _id : id}, {
        modelo: req.body.modelo,
        ano: req.body.ano
    }).then(() => { res.json({msg: "wow"}) })
});

// DELETE = DELETAR
routes.delete("/:id", function (req, res) {
    const id = req.params.id;
    vehiclesModels.findOneAndRemove({ _id : id}).then(() => res.json({msg: "Cliente excluido"}));
});

module.exports = routes;