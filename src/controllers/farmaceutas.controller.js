const query = require('../knexfile');

module.exports = {
    registroMedicamento: async (req, res) => {
        let farmacias = await query('farmacias')
            .select('*')
            .orderBy('id', 'DESC')

        res.render('medicamentos_farmaceutas', {
            farmacias
        })
    },

    registrarFarmaceuta: async (req, res) => {

        let verificar = await query('farmaceutas')
            .select('*')
            .where('cedula', '=', req.body.cedula)

        if (verificar.length > 0) {
            res.json({ ok: false, msg: 'El farmaceuta ya se encuentra registrado' })
            return;
        }

        let resultado = await query('farmaceutas')
            .insert({
                cedula: req.body.cedula,
                nombre: req.body.nombre,
                apellido: req.body.apellido,
                correo: req.body.correo,
                clave: req.body.clave
            })

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Farmaceuta registrado exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    validarUsuario: async (req, res) => {

        let verificar = await query('farmaceutas')
            .select('*')
            .where('correo', '=', req.body.correo)

        if (verificar.length == 0) {
            res.json({ ok: false, msg: 'El correo no se encuentra registrado' })
            return;
        }

        let clave = verificar[0].clave;

        if (clave != req.body.clave) {
            res.json({ ok: false, msg: 'Clave incorrecta' })
            return;
        }

        res.json({ ok: true })
    }

}