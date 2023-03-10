const btnOrdenacao = document.querySelector('#livros-ordenados')

btnOrdenacao.addEventListener('click', ordernarLivroPreco)

function ordernarLivroPreco(){
	const ordernandoPorPreco = livros.sort((a,b) =>
		a.preco - b.preco);
	exibirLivros(ordernandoPorPreco)
}