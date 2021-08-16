const query = require('../knexfile');

module.exports = {
    registrarPatologia: async (req, res) => {

        let resultado = await query('patologias')
            .insert({
                patologia: req.body.patologia,
                descripcion: req.body.descripcion
            })

        let patologia = await query('patologias')
            .select('*')
            .orderBy('id', 'DESC')
            .limit(1)

        let id_patologia = patologia[0].id;

        let medicamentos = req.body.medicamentos;

        medicamentos.forEach(async item => {
            await query('farmaco_patologia')
                .insert({
                    id_farmaco: item,
                    id_patologia
                })
        });

        if (resultado.length > 0) {
            res.json({ ok: true, msg: 'Patologia registrada exitosamente' })
        } else {
            res.json({ ok: false, msg: 'Error al registrar' })
        }
    },

    registro: async (req, res) => {

        let farmacos = await query('farmacos')

        res.render('patologias', {
            farmacos
        })

    }
}