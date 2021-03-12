const query = require('../knexfile');

module.exports = {
    registrarMedico: async (req, res) => {
        
        let verificar = await query('medicos')
            .select('*')
            .where('cedula', '=', req.body.cedula)

        if(verificar.length > 0){
            res.json({ok: false, msg: 'El medico ya se encuentra registrado'})
            return;
        }
        
        let resultado = await query('medicos')
            .insert({
                cedula: req.body.cedula,
                nombre: req.body.nombre,
                especialidad: req.body.especialidad
            })

        if(resultado.length > 0){
            res.json({ok: true, msg: 'Medico registrado exitosamente'})
        } else {
            res.json({ok: false, msg: 'Error al registrar'})
        }
    },

    consultarMedicos: async (req, res) => {
        let medicos = await query('medicos').select('*');

        res.render('consultamedicos', {
            medicos
        })
    }
}