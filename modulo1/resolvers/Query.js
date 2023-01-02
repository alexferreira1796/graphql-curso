const { perfis, usuarios } = require('../data/db');

module.exports = {
    ola() {
        return "Olá mundo!"
    },
    dataAtual() {
        const date = new Date();
        return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()} às ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    },
    usuarioLogado() {
        return {
            id: 1,
            nome: 'Ana Web',
            email: "ana@gmail.com",
            idade: 23,
            salario_real: 1246.45,
            vip: true,
            perfil_id: 2
        }
    },
    produtoEmDestaque() {
        return {
            nome: "MacBook",
            preco: 7800,
            desconto: 10
        }
    },
    numerosMegaSena() {
        const crescente = (a,b) => a - b;
        const data = Array(6).fill(0).map(_ => parseInt(Math.random() * 60 + 1));
        //return data.filter((e, i) => data.indexOf(e) === i ).sort(crescente);
        return [...new Set(data)].sort(crescente)
    },
    usuarios() {
        return usuarios;
    },
    usuario(_, args) {
        const sel = usuarios.filter((e) => e.id === args.id);
        return sel ? sel[0] : null;
    },
    perfis() {
        return perfis
    },
    perfil(_, args) {
        const el = perfis.filter(({id}) => id === args.id)
        return el ? el[0] : null;
    }
}