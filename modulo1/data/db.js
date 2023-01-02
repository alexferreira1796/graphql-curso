const usuarios = [
    {
        id: 1,
        nome: "João",
        email: "joao@gmail.com",
        idade: 23,
        salario: 8000,
        vip: true,
        perfil_id: 1
    },
    {
        id: 2,
        nome: "Alex",
        email: "alex@gmail.com",
        idade: 26,
        salario: 5000,
        vip: false,
        perfil_id: 2
    },
    {
        id: 3,
        nome: "Felipe",
        email: "felipe@gmail.com",
        idade: 23,
        salario: 10000,
        vip: true,
        perfil_id: 1
    },
]

const perfis = [
    {
        id: 1,
        nome: "Comun"
    },
    {
        id: 2,
        nome: "Administrador"
    }
]

module.exports = {
    usuarios,
    perfis
}