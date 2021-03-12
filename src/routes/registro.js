const express = require('express');
const router = express.Router();

const controller = require('../controllers/registro.controller');

router.get('/', controller.consultarPreguntas);

router.post('/', controller.registrarUsuario);

module.exports = router;