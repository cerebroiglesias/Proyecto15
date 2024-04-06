import mongoose from 'mongoose';
const { Schema } = mongoose;

const articuloSchema = new Schema({
    nombre: String,
    precio: Number,
    stock: Number
});

const Articulo = mongoose.model('articulos', articuloSchema);

const getAll = async () => {
    return await Articulo.find({}).exec();
}

const create = async (nombre, precio, stock) => {
    const articulo = new Articulo({
        nombre: nombre,
        precio: precio,
        stock: stock
    })
    return await articulo.save()
}

const update = async (nombre, precio, stock) => {
    return Articulo.updateOne({nombre: nombre}, {$set: {precio: precio, stock: stock}});
}

const erase = async (nombre) => {
    return await Articulo.deleteOne({nombre: nombre});
}

export default {
    getAll,
    create,
    update,
    erase
}