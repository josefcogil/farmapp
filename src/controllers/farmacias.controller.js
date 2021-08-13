const query = require('../knexfile');

module.exports = {
    consultarPorMedicamento: async (req, res) => {
        let farmacias = await query('farmaco_farmacia')
            .select('*')
            .innerJoin('farmacias', 'farmacias.id', '=', 'id_farmacia')
            .where('id_farmaco', '=', req.params.id)

        res.json({ ok: true, farmacias })
    },

    registrarFarmacia: async (req, res) => {

        let resultado = await query('farmacias')
            .insert({
                nombre: req.body.nombre,
                direccion: req.body.direccion
            })

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Farmacia registrado exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    consultarFarmacias: async (req, res) => {
        let farmacias = await query('farmacias').select('*');

        res.render('consultafarmacias', {
            farmacias
        })
    },

    editar: async (req, res) => {
        let farmacias = await query('farmacias')
            .select('*')
            .where('id', '=', req.params.id)

        let farmacia = farmacias[0]

        res.render('editar_farmacia', {
            farmacia
        })
    },

    editarFarmacia: async (req, res) => {
        let resultado = await query('farmacias')
            .update(req.body)
            .where('id', '=', req.params.id)

        res.json({ ok: true, msg: 'Información editada' })
    },

    eliminarFarmacia: async (req, res) => {
        await query('farmacias').where('id', '=', req.params.id).del()
    }
}