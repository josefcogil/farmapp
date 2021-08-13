const query = require('../knexfile');

module.exports = {
    registrarRecipe: async (req, res) => {

        let resultado = await query('recipes')
            .insert({
                id_medico: req.body.medico,
                ci_paciente: req.body.paciente
            })

        let recipe = await query('recipes')
            .select('*')
            .orderBy('id', 'DESC')
            .limit(1)

        let id_recipe = recipe[0].id;

        let medicamentos = req.body.medicamentos;

        medicamentos.forEach(async item => {
            await query('farmaco_recipe')
                .insert({
                    id_farmaco: item,
                    id_recipe
                })
        });

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Recipe generado exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al generar' })
        }
    },

    consultarTodo: async (req, res) => {
        let pacientes = await query('clientes').select('*').where('cedula', '>', '0');
        let patologias = await query('patologias').select('*');

        res.render('recipes', {
            pacientes,
            patologias
        })
    },

    consultarRecipes: async (req, res) => {
        let recipes = await query('recipes')
            .select(
                'recipes.id',
                'clientes.cedula',
                'medicos.nombre as medico',
                'clientes.nombre as paciente'
            )
            .innerJoin('medicos', 'medicos.id', '=', 'recipes.id_medico')
            .innerJoin('clientes', 'clientes.cedula', '=', 'recipes.ci_paciente')

        res.render('consultarecipes', {
            recipes
        })
    },

    verPorId: async (req, res) => {
        let medicamentos = await query('farmaco_recipe')
            .select('*')
            .where('id_recipe', '=', req.params.id)
            .innerJoin('farmacos', 'farmacos.id', '=', 'farmaco_recipe.id_farmaco')

        let recipes = await query('recipes')
            .select(
                'medicos.nombre as medico',
                'especialidad',
                'clientes.nombre as paciente'
            )
            .where('recipes.id', '=', req.params.id)
            .innerJoin('medicos', 'medicos.id', '=', 'recipes.id_medico')
            .innerJoin('clientes', 'clientes.cedula', '=', 'recipes.ci_paciente')

        res.render('verinforecipe', {
            medicamentos,
            recipes
        })
    },

    verPorIdFarmacia: async (req, res) => {
        let medicamentos = await query('farmaco_recipe')
            .select('*')
            .where('id_recipe', '=', req.params.id)
            .innerJoin('farmacos', 'farmacos.id', '=', 'farmaco_recipe.id_farmaco')

        let recipes = await query('recipes')
            .select(
                'medicos.nombre as medico',
                'especialidad',
                'clientes.nombre as paciente'
            )
            .where('recipes.id', '=', req.params.id)
            .innerJoin('medicos', 'medicos.id', '=', 'recipes.id_medico')
            .innerJoin('clientes', 'clientes.cedula', '=', 'recipes.ci_paciente')

        res.render('verinforecipe_farmacia', {
            medicamentos,
            recipes
        })
    },

    consultaFarmacia: async (req, res) => {
        let recipes = await query('recipes')
            .select(
                'recipes.id',
                'clientes.cedula',
                'medicos.nombre as medico',
                'clientes.nombre as paciente'
            )
            .innerJoin('medicos', 'medicos.id', '=', 'recipes.id_medico')
            .innerJoin('clientes', 'clientes.cedula', '=', 'recipes.ci_paciente')

        res.render('recipes_farmacia', {
            recipes
        })
    },

    consultarPorCedula: async (req, res) => {
        let recipes = await query('recipes')
            .select(
                'recipes.id',
                'clientes.cedula',
                'medicos.nombre as medico',
                'clientes.nombre as paciente'
            )
            .where('recipes.ci_paciente', 'LIKE', `%${req.params.cedula}%`)
            .innerJoin('medicos', 'medicos.id', '=', 'recipes.id_medico')
            .innerJoin('clientes', 'clientes.cedula', '=', 'recipes.ci_paciente')

        res.json({ ok: true, recipes });
    },

    eliminarRecipe: async (req, res) => {
        await query('recipes').where('id', '=', req.params.id).del()
    }
}