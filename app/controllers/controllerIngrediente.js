const Ingrediente = require('../models/ingredientes');

function index(req, res) {
    Ingrediente.find({})
        .then(ingredientes => {
            if (ingredientes.length) return res.status(200).send({ ingredientes });
            return res.status(204).send({ message: 'NO HAY CONTENIDO' });
        }).catch(error => res.status(500).send({ error }));

}
function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (req.body.ingrediente) return res.status(200).send({ ingredientes });

    return res.status(404).send({ message: 'NO ENCONTRADO' });
}
function create(req, res) {
    new Ingrediente(req.body).save().then(ingrediente => res.status(201).send({ ingrediente })).catch(error => res.status(500).send({ error }))

}
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.ingredientes) return res.status(404).send({ message: 'NO ENCONTRADO' });
    let ingrediente = req.body.ingredientes[0];
    ingrediente.Object.assign(ingrediente, req.body);
    ingrediente.save().then(ingrediente => res.status(200).send({ message: 'UPDATED' })).catch(error => res.status(500));
}
function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.ingredientes) return res.status(404).send({ message: 'NO ENCONTRADO' });
    req.body.ingredientes[0].removes().then(ingrediente => res.status(200).send({ message: 'BORRADO', ingrediente })).catch(error => res.status(500).send({ error }));
}
function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Ingrediente.find(query).then(ingredientes => {
        if (!ingredientes.length) return next();
        req.body.ingredientes = ingredientes;
        return next();
    }).catch(error => {
        req.body.error = error;
        next();
    });
}
module.exports = {
    index,
    show,
    create,
    update,
    remove,
    find
}