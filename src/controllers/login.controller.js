const query = require('../knexfile');

module.exports = {
    validarUsuario: async (req, res) => {

        let verificar = await query('usuarios')
            .select('*')
            .where('correo', '=', req.body.correo)

        if (verificar.length == 0) {
            res.json({ ok: false, msg: 'El correo no se encuentra registrado' })
            return;
        }

        let clave = verificar[0].clave;
        
        if(clave != req.body.clave){
            res.json({ ok: false, msg: 'Clave incorrecta' })
            return;
        }

        res.json({ok: true})
    }
}