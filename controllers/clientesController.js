import model from '../models/clientesModel.js';

const getAll = async (req, res) => {
    model.getAll().then(data => res.send(data)).catch(err => res.send(err));
}

const create = async (req, res) => {
    const { nombre, edad } = req.body;
    model.create(nombre, edad).then(data => res.send(data)).catch(err => res.send(err));
}

const update = async (req, res) => {
    const { nombre, edad } = req.body;
    model.update(nombre, edad).then(data => res.send(data)).catch(err => res.send(err));
}

const erase = async (req, res) => {
    const { nombre } = req.body;
    model.erase(nombre).then(data => res.send(data)).catch(err => res.send(err));
}

export default {
    getAll,
    create,
    update,
    erase
}