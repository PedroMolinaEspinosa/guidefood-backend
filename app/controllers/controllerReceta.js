const Receta = require('../models/recetas');

function index(req, res) {
    Receta.find({})
        .then(recetas => {
            if (recetas.length) return res.status(200).send({ recetas });
            return res.status(204).send({ message: 'NO HAY CONTENIDO' });
        }).catch(error => res.status(500).send({ error }));

}
function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (req.body.recetas) return res.status(200).send({ recetas });

    return res.status(404).send({ message: 'NO ENCONTRADO' });
}
function create(req, res) {
    new Receta(req.body).save().then(recetas => res.status(201).send({ recetas })).catch(error => res.status(500).send({ error }))

}
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.recetas) return res.status(404).send({ message: 'NO ENCONTRADO' });
    let recetas = req.body.recetas[0];
    recetas.Object.assign(recetas, req.body);
    recetas.save().then(recetas => res.status(200).send({ message: 'UPDATED' })).catch(error => res.status(500));
}
function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.recetas) return res.status(404).send({ message: 'NO ENCONTRADO' });
    req.body.recetas[0].removes().then(recetas => res.status(200).send({ message: 'BORRADO', recetas })).catch(error => res.status(500).send({ error }));
}
function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Receta.find(query).then(recetas => {
        if (!recetas.length) return next();
        req.body.recetas = recetas;
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