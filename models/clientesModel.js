import mongoose from 'mongoose';
const { Schema } = mongoose;

const clientSchema = new Schema({
    nombre: String,
    edad: Number
});

const Cliente = mongoose.model('cliente', clientSchema);

const getAll = async () => {
    return await Cliente.find({}).exec();
}

const create = async (nombre, edad) => {
    const cliente = new Cliente({
        nombre: nombre,
        edad: edad
    })
    return await cliente.save();
}

const update = async (nombre, edad) => {
    return await Cliente.updateOne({nombre: nombre}, {$set: {edad: edad}})
}

const erase = async (nombre) => {
    return await Cliente.deleteOne({nombre: nombre});
}

export default {
    getAll,
    create,
    update,
    erase
}