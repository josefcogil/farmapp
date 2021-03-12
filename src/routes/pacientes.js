const express = require('express');
const router = express.Router();

const controller = require('../controllers/pacientes.controller');

router.get('/', controller.consultarPacientes);

router.get('/registro', (req, res) => res.render('pacientes'));

router.post('/', controller.registrarPaciente);

module.exports = router;