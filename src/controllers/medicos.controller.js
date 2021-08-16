const query = require('../knexfile');

module.exports = {
    registrarMedico: async (req, res) => {

        let verificar = await query('medicos')
            .select('*')
            .where('cedula', '=', req.body.cedula)

        if (verificar.length > 0) {
            res.json({ ok: false, msg: 'El medico ya se encuentra registrado' })
            return;
        }

        let resultado = await query('medicos')
            .insert({
                cedula: req.body.cedula,
                codigo: req.body.codigo,
                nombre: req.body.nombre,
                especialidad: req.body.especialidad
            })

        let id_med = resultado[0]

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Medico registrado exitosamente', id_med })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    consultarMedicos: async (req, res) => {
        let medicos = await query('medicos').select('*');

        res.render('consultamedicos', {
            medicos
        })
    },

    consultarMedicoPorId: async (req, res) => {
        let medicos = await query('medicos')
            .select('*')
            .where('id', '=', req.params.id)

        res.json({ ok: true, medico: medicos[0] })
    },

    editar: async (req, res) => {
        let medicos = await query('medicos')
            .select('*')
            .where('id', '=', req.params.id)

        let medico = medicos[0]

        res.render('editar_medico', {
            medico
        })
    },

    editarMedico: async (req, res) => {
        let resultado = await query('medicos')
            .update(req.body)
            .where('id', '=', req.params.id)

        res.json({ ok: true, msg: 'Información editada' })
    },

    eliminarMedico: async (req, res) => {
        await query('medicos').where('id', '=', req.params.id).del()
    }
}