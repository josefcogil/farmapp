const query = require('../knexfile');

module.exports = {
    registrarPaciente: async (req, res) => {
        
        let verificar = await query('clientes')
            .select('*')
            .where('cedula', '=', req.body.cedula)

        if(verificar.length > 0){
            res.json({ok: false, msg: 'El paciente ya se encuentra registrado'})
            return;
        }
        
        let resultado = await query('clientes')
            .insert({
                cedula: req.body.cedula,
                nombre: req.body.nombre,
                direccion: req.body.direccion,
                telefono: req.body.telefono
            })

        if(resultado.length > 0){
            res.json({ok: true, msg: 'Paciente registrado exitosamente'})
        } else {
            res.json({ok: false, msg: 'Error al registrar'})
        }
    },

    consultarPacientes: async (req, res) => {
        let pacientes = await query('clientes').select('*');

        res.render('consultapacientes', {
            pacientes
        })
    }
}