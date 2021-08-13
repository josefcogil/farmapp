const express = require('express');
const router = express.Router();

const controller = require('../controllers/medicamentos.controller');

router.get('/', controller.consultarMedicamentos);

router.get('/busqueda/:busqueda', controller.buscarMedicamento);

router.get('/patologia/:id', controller.consultarPorPatologia);

router.get('/patologia-nombre/:busqueda', controller.consultarPorNombrePatologia);

router.get('/registro', controller.consultarFarmacias);

router.post('/', controller.registrarMedicamento);

router.get('/:id', controller.consultarPorId);

router.get('/ver/:id', controller.verPorId);

router.get('/ver/farmacias/:id', controller.verPorIdFarmacia);

router.get('/editar/:id', controller.editar);

router.put('/:id', controller.editarMedicamento);

router.delete('/:id', controller.eliminarMedicamento)

module.exports = router;