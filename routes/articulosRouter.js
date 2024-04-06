import express from 'express';
import articulosController from '../controllers/articulosController.js';

const router = express.Router();

router.get('/', function(req, res, next) {
    articulosController.getAll(req, res);
});

router.get('/crear', function(req, res, next) {
    res.render('articulos', { title: 'Creación de articulos' });
});

router.post('/crear', function(req, res, next) {
    articulosController.create(req, res);
})

export default router;