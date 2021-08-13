const query = require('../knexfile');

module.exports = {
    consultarFarmacias: async (req, res) => {
        let farmacias = await query('farmacias')
            .select('*')
            .orderBy('id', 'DESC')

        res.render('medicamentos', {
            farmacias
        })
    },

    consultarMedicamentos: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .orderBy('id', 'DESC')

        res.render('consultamedicamentos', {
            medicamentos
        })
    },

    consultarPorId: async (req, res) => {
        let resultado = await query('farmacos')
            .select('*')
            .where('id', '=', req.params.id)

        res.json({ ok: true, resultado });
    },

    consultarPorPatologia: async (req, res) => {
        let medicamentos = await query('farmaco_patologia')
            .select('*')
            .where('id_patologia', '=', req.params.id)
            .innerJoin('farmacos', 'farmacos.id', '=', 'farmaco_patologia.id_farmaco')

        res.json({ ok: true, medicamentos });
    },

    consultarPorNombrePatologia: async (req, res) => {
        let medicamentos = await query('patologias')
            .select('*')
            .where('patologia', 'LIKE', `%${req.params.busqueda}%`)
            .innerJoin('farmaco_patologia', 'farmaco_patologia.id_patologia', '=', 'patologias.id')
            .innerJoin('farmacos', 'farmacos.id', '=', 'farmaco_patologia.id_farmaco')

        res.json({ ok: true, medicamentos });
    },

    verPorId: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .where('id', '=', req.params.id)

        let farmacias = await query('farmaco_farmacia')
            .select('*')
            .where('id_farmaco', '=', req.params.id)
            .innerJoin('farmacias', 'farmacias.id', '=', 'farmaco_farmacia.id_farmacia')

        let genericos = await query('farmacos')
            .select('*')
            .where('farmaco', '=', medicamentos[0].farmaco)
            .andWhere('id', '!=', medicamentos[0].id)

        res.render('verinfo', {
            medicamentos,
            farmacias,
            genericos
        })
    },

    verPorIdFarmacia: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .where('id', '=', req.params.id)

        let farmacias = await query('farmaco_farmacia')
            .select('*')
            .where('id_farmaco', '=', req.params.id)
            .innerJoin('farmacias', 'farmacias.id', '=', 'farmaco_farmacia.id_farmacia')

        let genericos = await query('farmacos')
            .select('*')
            .where('farmaco', '=', medicamentos[0].farmaco)
            .andWhere('id', '!=', medicamentos[0].id)

        res.render('verinfo_farmacia', {
            medicamentos,
            farmacias,
            genericos
        })
    },

    registrarMedicamento: async (req, res) => {
        let resultado = await query('farmacos')
            .insert({
                nombre: req.body.nombre,
                farmaco: req.body.medicamento,
                presentacion: req.body.presentacion,
                mg: req.body.mg
            })

        let medicamentos = await query('farmacos')
            .select('*')
            .orderBy('id', 'DESC')
            .limit(1)

        let id = medicamentos[0].id;

        console.log(id)

        let resultado2 = await query('farmaco_farmacia')
            .insert({
                id_farmaco: id,
                id_farmacia: req.body.farmacia
            })

        if (resultado.length > 0 && resultado2.length > 0) {
            res.json({ ok: true, msg: 'Medicamento registrado exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    buscarMedicamento: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .where('farmaco', 'LIKE', `%${req.params.busqueda}%`)

        res.json({ ok: true, medicamentos });
    },

    editar: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .where('id', '=', req.params.id)

        let medicamento = medicamentos[0]

        res.render('editar_medicamento', {
            medicamento
        })
    },

    editarMedicamento: async (req, res) => {
        let resultado = await query('farmacos')
            .update(req.body)
            .where('id', '=', req.params.id)

        res.json({ ok: true, msg: 'Información editada' })
    },

    eliminarMedicamento: async (req, res) => {
        await query('farmacos').where('id', '=', req.params.id).del()
    }
}