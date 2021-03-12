const query = require('../knexfile');

module.exports = {
    consultarMedicamentos: async (req, res) => {
        let medicamentos = await query('farmacos')
            .select('*')
            .orderBy('id', 'DESC')
            .limit(6)

        res.render('home', {
            medicamentos
        })
    }
}