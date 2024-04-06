
const express = require('express');
const app = express();

app.use(Middlewares);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;