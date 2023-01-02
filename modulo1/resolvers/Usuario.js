const { perfis } = require('../data/db');


module.exports = {
    salario(usuario) {
        return usuario.salario_real
    },
    perfil(usuario) {
        const sel = perfis.filter(({id}) => id === usuario.perfil_id)
        return sel ? sel[0] : null;
    }
}