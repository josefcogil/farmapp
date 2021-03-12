const express = require('express');
const router = express.Router();

const controller = require('../controllers/login.controller');

router.post('/', controller.validarUsuario);

module.exports = router;