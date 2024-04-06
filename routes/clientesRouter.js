import express from 'express';
import clientesController from '../controllers/clientesController.js';

const router = express.Router();

router.get('/', function(req, res, next) {
    clientesController.getAll(req, res);
});

router.get('/crear', function(req, res, next) {
    res.render('clientes', { title: 'Creación de clientes' });
});

router.post('/crear', function(req, res, next) {
    clientesController.create(req, res);
});

export default router;