const express = require('express');
const router = express.Router();

const controller = require('../controllers/patologias.controller');

router.get('/registro', controller.registro);

router.post('/', controller.registrarPatologia);

module.exports = router;