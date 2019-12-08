const Valorado = require('../models/valorado');

function index(req, res) {

    Valorado.find({}, function (err, valorado) {
        if (err)
            res.send(err);
        res.json(valorado);
    }).then(valorados => {
        if (valorados.length) return res.status(200);
        return res.status(204).send({ message: 'NO HAY VALORADOS' });
    }).catch(error => res.status(500).send({ error }));

}
// function index(req, res) {
// 	TVShow.findById(req.params.id, function(err, tvshow) {
//     if(err) return res.send(500. err.message);

//     console.log('GET /tvshow/' + req.params.id);
// 		res.status(200).jsonp(tvshow);
// 	});
// }

function show(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (req.body.valorado) return res.status(200).send({ valorados });

    return res.status(404).send({ message: 'NO ENCONTRADO' });
}
function create(req, res) {
    new Valorado(req.body).save().then(valorado => res.status(201).send({ valorado })).catch(error => res.status(500).send({ error }))

}
function update(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.valorados) return res.status(404).send({ message: 'NO ENCONTRADO' });
    let valorado = req.body.valorados[0];
    valorado.Object.assign(valorado, req.body);
    valorado.save().then(valorado => res.status(200).send({ message: 'UPDATED' })).catch(error => res.status(500));
}
function remove(req, res) {
    if (req.body.error) return res.status(500).send({ error });
    if (!req.body.valorados) return res.status(404).send({ message: 'NO ENCONTRADO' });
    req.body.valorados[0].removes().then(valorado => res.status(200).send({ message: 'BORRADO', valorado })).catch(error => res.status(500).send({ error }));
}
function find(req, res, next) {
    let query = {};
    query[req.params.key] = req.params.value;
    Valorado.find(query).then(valorados => {
        if (!valorados.length) return next();
        req.body.valorados = valorados;
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