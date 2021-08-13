const express = require('express');
const router = express.Router();

const controller = require('../controllers/farmacias.controller');

router.get('/', controller.consultarFarmacias);

router.get('/registro', (req, res) => res.render('farmacias'));

router.post('/', controller.registrarFarmacia);

router.get('/:id', controller.consultarPorMedicamento);

router.get('/editar/:id', controller.editar);

router.put('/:id', controller.editarFarmacia);

router.delete('/:id', controller.eliminarFarmacia)

module.exports = router;