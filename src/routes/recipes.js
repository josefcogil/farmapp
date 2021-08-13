const express = require('express');
const router = express.Router();

const controller = require('../controllers/recipes.controller');

router.get('/', controller.consultarRecipes);

router.get('/consulta/farmacias', controller.consultaFarmacia)

router.get('/consulta/farmacias/:cedula', controller.consultarPorCedula)

router.get('/registro', controller.consultarTodo);

router.post('/', controller.registrarRecipe);

router.get('/ver/:id', controller.verPorId);

router.get('/ver/farmacias/:id', controller.verPorIdFarmacia);

router.delete('/:id', controller.eliminarRecipe)

module.exports = router;