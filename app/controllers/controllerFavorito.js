const Favorito = require('../models/favorito');

function index(req, res) {

    Favorito.find({}, function (err, favorito) {
        if (err)
            res.send(err);
        else res.json(favorito);
    }).then(favoritos => {
        if (favoritos.length) return res.status(200);
        else return res.status(204).send({ message: 'NO HAY FAVORITOS' });
    }).catch(error => res.status(500).send({ error }));

}

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (req.body.favorito) return res.status(200).send({ favoritos });

    return res.status(404).send({ message: 'NO ENCONTRADO' });
}
function create(req, res) {
    new Favorito(req.body).save().then(favorito => res.status(201).send({ favorito })).catch(error => res.status(500).send({ error }))

}
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.favoritos) return res.status(404).send({ message: 'NO ENCONTRADO' });
    let favorito = req.body.favoritos[0];
    favorito.Object.assign(favorito, req.body);
    favorito.save().then(favorito => res.status(200).send({ message: 'UPDATED' })).catch(error => res.status(500));
}
function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.favoritos) return res.status(404).send({ message: 'NO ENCONTRADO EL FAVORITO' });
    req.body.favoritos[0].removes().then(favorito => res.status(200).send({ message: 'BORRADO', favorito })).catch(error => res.status(500).send({ error }));
}
function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Favorito.find(query).then(favoritos => {
        if (!favoritos.length) return next();
        req.body.favoritos = favoritos;
        console.log(favoritos.length);
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