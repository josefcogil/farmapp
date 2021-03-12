const express = require('express');
const router = express.Router();

const controller = require('../controllers/medicos.controller');

router.get('/', controller.consultarMedicos);

router.get('/registro', (req, res) => res.render('medicos'));

router.post('/', controller.registrarMedico)

module.exports = router;