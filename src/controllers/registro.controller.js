const query = require('../knexfile');

module.exports = {
    registrarUsuario: async (req, res) => {

        console.log(req.body)

        let verificar = await query('usuarios')
            .select('*')
            .where('correo', '=', req.body.correo)

        if (verificar.length > 0) {
            res.json({ ok: false, msg: 'El correo ya se encuentra registrado' })
            return;
        }

        let resultado = await query('usuarios')
            .insert({
                correo: req.body.correo,
                clave: req.body.clave,
                rol: 2,
                medico: req.body.id_medico
            })

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Usuario registrado exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    consultarPreguntas: async (req, res) => {
        let preguntas = await query('preguntas').select('*');

        res.render('registro', {
            preguntas
        })
    }
}