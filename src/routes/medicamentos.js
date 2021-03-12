const express = require('express');
const router = express.Router();

const controller = require('../controllers/medicamentos.controller');

router.get('/', controller.consultarMedicamentos);

router.get('/patologia/:id', controller.consultarPorPatologia)

router.get('/registro', controller.consultarFarmacias);

router.post('/', controller.registrarMedicamento);

router.get('/:id', controller.consultarPorId);

router.get('/ver/:id', controller.verPorId);

module.exports = router;