const express = require('express');
const router = express.Router();

const controller = require('../controllers/medicos.controller');

router.get('/', controller.consultarMedicos);

router.get('/consulta/:id', controller.consultarMedicoPorId);

router.get('/registro', (req, res) => res.render('medicos'));

router.post('/', controller.registrarMedico)

router.get('/editar/:id', controller.editar);

router.put('/:id', controller.editarMedico);

router.delete('/:id', controller.eliminarMedico)

module.exports = router;