const API_ENDPOINT = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

let livros = []
getData()

async function getData() {
    const response = await fetch(API_ENDPOINT)
    livros = await response.json()
    let livrosComDesconto = aplicarDesconto(livros)
    return printData(livrosComDesconto)
}

function aplicarDesconto(livros) {
    const desconto = 0.3
    let livrosComDesconto = livros.map(livro => {
        return {
            ...livro, preco: livro.preco - (livro.preco * desconto)
        }
    })
    return livrosComDesconto
}