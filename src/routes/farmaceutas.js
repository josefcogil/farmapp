const express = require('express');
const router = express.Router();

const controller = require('../controllers/farmaceutas.controller');

router.get('/registro', (req, res) => res.render('registro_farmaceuta'));

router.get('/login', (req, res) => res.render('login_farmaceuta'));

router.get('/medicamentos/registro', controller.registroMedicamento);

router.post('/login', controller.validarUsuario);

router.post('/', controller.registrarFarmaceuta);

module.exports = router;