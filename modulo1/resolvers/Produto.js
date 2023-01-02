module.exports = {
    precoComDesconto(produto) {
        // valor base * (porcentagem/100)
        return produto.preco - ( produto.preco * (produto.desconto / 100) )
    }
}