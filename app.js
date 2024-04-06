import express from 'express';
import path from 'path';
import cors from 'cors';
import hbs from 'hbs';
import indexRoutes from './routes/indexRouter.js';
import clientesRouter from './routes/clientesRouter.js';
import articulosRouter from './routes/articulosRouter.js';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes);
app.use('/clientes', clientesRouter);
app.use('/articulos', articulosRouter);


export default app;