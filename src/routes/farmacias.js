const express = require('express');
const router = express.Router();

const controller = require('../controllers/farmacias.controller');

router.get('/', controller.consultarFarmacias);

router.get('/registro', (req, res) => res.render('farmacias'));

router.post('/', controller.registrarFarmacia);

router.get('/:id', controller.consultarPorMedicamento);

module.exports = router;