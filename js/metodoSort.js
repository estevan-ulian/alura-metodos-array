const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarListaPreco)

function ordenarListaPreco() {
    const livrosOrdenados = livros.sort((a, b) => a.preco - b.preco);

    printData(livrosOrdenados)
}