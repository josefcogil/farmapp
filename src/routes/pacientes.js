const express = require('express');
const router = express.Router();

const controller = require('../controllers/pacientes.controller');

router.get('/', controller.consultarPacientes);

router.get('/registro', (req, res) => res.render('pacientes'));

router.post('/', controller.registrarPaciente);

router.get('/editar/:id', controller.editar);

router.put('/:id', controller.editarPaciente);

router.delete('/:id', controller.eliminarPaciente)

module.exports = router;